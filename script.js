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
  const idleSpeed = -6;
  const hoverSweep = 140;
  const hoverEase = .085;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  let rotation = -2 * angleStep;
  let cardWidth = 0;
  let radius = 0;
  let ringScale = 1;
  let frame;
  let drag;
  let spring;
  let lastFrame = performance.now();
  let hovering = false;
  let hoverFrom = 0;
  let hoverBase = 0;
  let hoverTarget = 0;
  let lastPointerX = 0;
  let running = false;
  let onScreen = false;

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
    heroCards.forEach((card, index) => {
      const relative = normalizeAngle(index * angleStep + rotation);
      const visible = Math.abs(relative) < 88;
      card.classList.toggle('is-active', index === normalizedIndex);
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
      if (spring) {
        const displacement = rotation - spring.target;
        const acceleration = (-60 * displacement - 22 * spring.velocity) / .9;
        spring.velocity += acceleration * delta;
        rotation += spring.velocity * delta;
        if (Math.abs(displacement) < .03 && Math.abs(spring.velocity) < .08) {
          rotation = spring.target;
          spring = undefined;
          if (hovering) anchorHover(lastPointerX);
        }
      } else if (hovering) {
        const blend = 1 - Math.pow(1 - hoverEase, delta * 60);
        rotation += (hoverTarget - rotation) * blend;
      } else {
        rotation += idleSpeed * delta;
      }
      if (Math.abs(rotation) > 3600) rotation %= 360;
      paint();
    }

    frame = requestAnimationFrame(tick);
  }

  function startMotion() {
    if (running || reduceMotion.matches || !onScreen || document.hidden) return;
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
    radius = cardWidth * 3.02;
    const perspective = Number.parseFloat(getComputedStyle(heroRail).perspective) || 1500;
    ringScale = perspective / (perspective + radius);
    heroCards.forEach((card, index) => {
      card.style.transform = `translate(-50%, -50%) rotateY(${index * angleStep}deg) translateZ(${radius}px)`;
    });
    paint();
  }

  function anchorHover(clientX) {
    const bounds = heroRail.getBoundingClientRect();
    hoverFrom = (clientX - bounds.left) / bounds.width - .5;
    hoverBase = rotation;
    hoverTarget = hoverBase;
  }

  heroRail.addEventListener('pointerenter', event => {
    if (!canHover.matches || reduceMotion.matches || drag || hovering) return;
    hovering = true;
    spring = undefined;
    lastPointerX = event.clientX;
    anchorHover(event.clientX);
  });
  heroRail.addEventListener('pointerleave', () => {
    hovering = false;
    delete heroRail.dataset.direction;
  });
  heroRail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    spring = undefined;
    heroRail.setPointerCapture(event.pointerId);
    heroRail.dataset.dragging = 'true';
    drag = { id: event.pointerId, x: event.clientX, velocity: 0 };
    startMotion();
  });
  heroRail.addEventListener('pointermove', event => {
    lastPointerX = event.clientX;
    if (!drag || drag.id !== event.pointerId) {
      if (!hovering) return;
      const bounds = heroRail.getBoundingClientRect();
      const normalizedX = (event.clientX - bounds.left) / bounds.width - .5;
      hoverTarget = hoverBase + (normalizedX - hoverFrom) * hoverSweep;
      const difference = hoverTarget - rotation;
      heroRail.dataset.direction = difference > .5 ? 'forward' : difference < -.5 ? 'backward' : '';
      return;
    }

    const deltaX = event.clientX - drag.x;
    drag.x = event.clientX;
    drag.velocity = deltaX;
    rotation += deltaX * .22;
    paint();
  });

  function endDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    const throwDistance = reduceMotion.matches ? 0 : drag.velocity * 4;
    const initialVelocity = reduceMotion.matches ? 0 : drag.velocity * 12;
    drag = undefined;
    heroRail.removeAttribute('data-dragging');
    if (heroRail.hasPointerCapture(event.pointerId)) heroRail.releasePointerCapture(event.pointerId);
    if (throwDistance) spring = { target: rotation + throwDistance, velocity: initialVelocity };
    else if (hovering) anchorHover(event.clientX);
  }

  heroRail.addEventListener('pointerup', endDrag);
  heroRail.addEventListener('pointercancel', endDrag);
  heroRail.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    spring = undefined;
    rotation -= event.key === 'ArrowRight' ? angleStep : -angleStep;
    paint();
  });
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

  const visibilityObserver = new IntersectionObserver(entries => {
    onScreen = entries.some(entry => entry.isIntersecting);
    if (onScreen) startMotion();
    else stopMotion();
  });

  heroCards.forEach(card => card.querySelector('img')?.setAttribute('draggable', 'false'));
  new ResizeObserver(measure).observe(heroRail);
  visibilityObserver.observe(heroRail);
  measure();
}
