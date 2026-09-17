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
const heroCards = [...document.querySelectorAll('[data-card]')];

if (heroRail && heroCards.length) {
  const count = heroCards.length;
  const ambientSpeed = .15;
  let position = 2;
  let velocity = ambientSpeed;
  let targetVelocity = ambientSpeed;
  let cardWidth = 0;
  let frame;
  let drag;
  let lastFrame = performance.now();
  let hoverDirection = 0;
  let running = false;

  function settings() {
    const compact = window.innerWidth <= 560;
    return compact
      ? { pitch: .74, rotate: 22, depth: .24, visible: 1.85, perspective: 5.4 }
      : { pitch: .82, rotate: 30, depth: .36, visible: 2.75, perspective: 5.8 };
  }

  function paint() {
    if (!cardWidth) return;
    const visual = settings();
    const pitch = cardWidth * visual.pitch;
    heroRail.style.perspective = `${cardWidth * visual.perspective}px`;

    heroCards.forEach((card, index) => {
      let offset = index - position;
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, .72);
      const tilt = Math.min(visual.rotate * ramp, 66) * Math.sign(offset);
      const visibility = Math.max(0, Math.min(1, visual.visible + .4 - distance));

      card.style.transform = `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-visual.depth * cardWidth * ramp}px) rotateY(${-tilt}deg)`;
      card.style.opacity = String(visibility * Math.max(.26, 1 - .13 * distance));
      card.style.zIndex = String(100 - Math.round(distance));
      card.style.pointerEvents = distance < visual.visible ? 'auto' : 'none';
      card.classList.toggle('is-active', distance < .52);
      card.setAttribute('aria-hidden', String(distance >= visual.visible));
    });
  }

  function tick(now) {
    if (!running) return;
    const delta = Math.min((now - lastFrame) / 1000, .05);
    lastFrame = now;

    if (!drag) {
      const blend = 1 - Math.exp(-delta * 5.5);
      velocity += (targetVelocity - velocity) * blend;
      position += velocity * delta;
      paint();
    }

    frame = requestAnimationFrame(tick);
  }

  function startMotion() {
    if (running || reduceMotion.matches || document.hidden) return;
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
    targetVelocity = direction * .48;
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
    drag = { id: event.pointerId, x: event.clientX, position, velocity: 0, time: performance.now() };
  });
  heroRail.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) {
      if (event.pointerType === 'touch') return;
      const bounds = heroRail.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      setHover(relativeX < .38 ? -1 : relativeX > .62 ? 1 : 0);
      return;
    }

    const pitch = cardWidth * settings().pitch;
    const now = performance.now();
    const previous = position;
    position = drag.position - (event.clientX - drag.x) / pitch;
    drag.velocity = ((position - previous) / Math.max(now - drag.time, 1)) * 1000;
    drag.time = now;
    paint();
  });

  function endDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    velocity = Math.max(-1.5, Math.min(1.5, drag.velocity));
    drag = undefined;
    heroRail.removeAttribute('data-dragging');
    if (heroRail.hasPointerCapture(event.pointerId)) heroRail.releasePointerCapture(event.pointerId);
    targetVelocity = ambientSpeed;
  }

  heroRail.addEventListener('pointerup', endDrag);
  heroRail.addEventListener('pointercancel', endDrag);
  heroRail.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    position = Math.round(position) + (event.key === 'ArrowRight' ? 1 : -1);
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
