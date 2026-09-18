const featureTriggers = [...document.querySelectorAll('[data-feature]')];
const featureViews = [...document.querySelectorAll('[data-view]')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function showFeature(name) {
  featureTriggers.forEach(trigger => {
    const active = trigger.dataset.feature === name;
    trigger.classList.toggle('is-active', active);
    trigger.setAttribute('aria-selected', String(active));
    trigger.tabIndex = active ? 0 : -1;
  });
  featureViews.forEach(view => {
    view.classList.toggle('is-active', view.dataset.view === name);
  });
}

featureTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    const name = trigger.dataset.feature;
    showFeature(name);
    document.querySelector(`[data-view="${name}"]`)?.scrollIntoView({
      behavior: reduceMotion.matches ? 'auto' : 'smooth',
      block: 'center',
    });
  });
  trigger.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? featureTriggers.length - 1
        : (index + (event.key === 'ArrowDown' ? 1 : -1) + featureTriggers.length) % featureTriggers.length;
    featureTriggers[nextIndex].focus();
    featureTriggers[nextIndex].click();
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) showFeature(visible.target.dataset.view);
  }, { rootMargin: '-24% 0px -24% 0px', threshold: [.2, .45, .7] });
  featureViews.forEach(view => observer.observe(view));
}

showFeature('products');

const heroRail = document.querySelector('.hero-rail');
const heroCylinder = document.querySelector('.hero-cylinder');
const heroCards = [...document.querySelectorAll('[data-card]')];

if (heroRail && heroCylinder && heroCards.length) {
  const count = heroCards.length;
  const angleStep = 360 / count;
  const ambientSpeed = -2.4;
  let rotation = -2 * angleStep;
  let velocity = ambientSpeed;
  let targetVelocity = ambientSpeed;
  let cardWidth = 0;
  let radius = 0;
  let ringScale = 1;
  let frame;
  let drag;
  let lastFrame = performance.now();
  let hoverDirection = 0;
  let running = false;
  let activeIndex = -1;

  /*
   * Previous fan-style coverflow, intentionally retained as a commented reference:
   * compact ? { pitch: .74, rotate: 22, depth: .24, visible: 1.85 }
   *         : { pitch: .82, rotate: 30, depth: .36, visible: 2.75 }
   * transform: translateX(offset * pitch) translateZ(-depth * distance) rotateY(tilt)
   *
   * The active implementation below places every card on one continuous cylinder.
   */
  function normalizeAngle(angle) {
    return ((angle + 180) % 360 + 360) % 360 - 180;
  }

  function paint() {
    heroCylinder.style.transform = `translateX(-50%) scale3d(${ringScale}, ${ringScale}, ${ringScale}) rotateY(${rotation}deg)`;
    const nextActive = Math.round(-rotation / angleStep);
    const normalizedIndex = ((nextActive % count) + count) % count;
    if (normalizedIndex === activeIndex) return;
    activeIndex = normalizedIndex;
    heroCards.forEach((card, index) => {
      const relative = normalizeAngle(index * angleStep + rotation);
      const visible = Math.abs(relative) < 88;
      card.classList.toggle('is-active', index === activeIndex);
      card.classList.toggle('is-side', Math.abs(relative) > 50 && Math.abs(relative) <= 90);
      card.classList.toggle('is-back', Math.abs(relative) > 90);
      card.setAttribute('aria-hidden', String(!visible));
      card.style.pointerEvents = Math.abs(relative) < 58 ? 'auto' : 'none';
    });
  }

  function tick(now) {
    if (!running) return;
    const delta = Math.min((now - lastFrame) / 1000, .05);
    lastFrame = now;

    if (!drag) {
      const blend = 1 - Math.exp(-delta * 5.5);
      velocity += (targetVelocity - velocity) * blend;
      rotation = normalizeAngle(rotation + velocity * delta);
      paint();
    }

    frame = requestAnimationFrame(tick);
  }

  function startMotion() {
    if (running || reduceMotion.matches) return;
    running = true;
    lastFrame = performance.now();
    frame = requestAnimationFrame(tick);
  }

  function stopMotion() {
    running = false;
    if (frame) cancelAnimationFrame(frame);
    frame = undefined;
  }

  function measure() {
    cardWidth = heroCards[0].offsetWidth;
    const compact = window.innerWidth <= 560;
    const medium = window.innerWidth <= 900;
    radius = cardWidth * (compact ? 2.85 : medium ? 3.4 : 3.7);
    const perspective = Number.parseFloat(getComputedStyle(heroRail).perspective) || 1500;
    ringScale = perspective / (perspective + radius);
    heroCards.forEach((card, index) => {
      card.style.transform = `translate(-50%, -50%) rotateY(${index * angleStep}deg) translateZ(${radius}px)`;
    });
    paint();
  }

  function clearHover() {
    hoverDirection = 0;
    targetVelocity = ambientSpeed;
    delete heroRail.dataset.direction;
  }

  function setHover(direction) {
    if (direction === hoverDirection) return;
    clearHover();
    if (!direction || reduceMotion.matches || drag) return;
    hoverDirection = direction;
    targetVelocity = direction * 8.5;
    heroRail.dataset.direction = direction > 0 ? 'forward' : 'backward';
  }

  heroRail.addEventListener('pointerleave', () => {
    if (drag) return;
    clearHover();
  });
  heroRail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    clearHover();
    heroRail.setPointerCapture(event.pointerId);
    heroRail.dataset.dragging = 'true';
    drag = { id: event.pointerId, x: event.clientX, rotation, velocity: 0, time: performance.now() };
  });
  heroRail.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) {
      if (event.pointerType === 'touch') return;
      const bounds = heroRail.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      setHover(relativeX < .38 ? -1 : relativeX > .62 ? 1 : 0);
      return;
    }

    const now = performance.now();
    const previous = rotation;
    rotation = drag.rotation + ((event.clientX - drag.x) / Math.max(radius, 1)) * (180 / Math.PI);
    drag.velocity = (normalizeAngle(rotation - previous) / Math.max(now - drag.time, 1)) * 1000;
    drag.time = now;
    paint();
  });

  function endDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    velocity = reduceMotion.matches ? 0 : Math.max(-52, Math.min(52, drag.velocity));
    drag = undefined;
    heroRail.removeAttribute('data-dragging');
    if (heroRail.hasPointerCapture(event.pointerId)) heroRail.releasePointerCapture(event.pointerId);
    targetVelocity = reduceMotion.matches ? 0 : ambientSpeed;
  }

  heroRail.addEventListener('pointerup', endDrag);
  heroRail.addEventListener('pointercancel', endDrag);
  heroRail.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    rotation -= event.key === 'ArrowRight' ? angleStep : -angleStep;
    velocity = 0;
    paint();
  });
  heroRail.addEventListener('blur', clearHover);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopMotion();
    else startMotion();
  });
  window.addEventListener('resize', measure);
  reduceMotion.addEventListener('change', () => {
    measure();
    if (reduceMotion.matches) stopMotion();
    else startMotion();
  });

  heroCards.forEach(card => card.querySelector('img')?.setAttribute('draggable', 'false'));
  new ResizeObserver(measure).observe(heroRail);
  measure();
  startMotion();
}
