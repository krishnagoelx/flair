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
  const gap = .05;
  const rotate = 44;
  const depth = .6;
  const falloff = .56;
  const fade = .1;
  let position = 2;
  let target = 2;
  let cardWidth = 0;
  let frame;
  let drag;
  let ambientTimer;
  let hoverDelay;
  let hoverTimer;
  let hoverDirection = 0;

  function paint() {
    if (!cardWidth) return;
    const pitch = cardWidth * (1 + gap);
    heroRail.style.perspective = `${cardWidth * 3}px`;

    heroCards.forEach((card, index) => {
      let offset = index - position;
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
      const edge = Math.min(1, Math.max(0, count / 2 - distance));

      card.style.transform = `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-depth * cardWidth * ramp}px) rotateY(${-tilt}deg)`;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
      card.style.pointerEvents = distance < 4.75 ? 'auto' : 'none';
      card.setAttribute('aria-hidden', String(distance >= 4.75));
    });
  }

  function settle(nextTarget) {
    if (frame) cancelAnimationFrame(frame);
    target = nextTarget;

    if (reduceMotion.matches) {
      position = target;
      paint();
      frame = undefined;
      return;
    }

    const step = () => {
      const remaining = target - position;
      if (Math.abs(remaining) < .0004) {
        position = target;
        paint();
        frame = undefined;
        return;
      }
      position += remaining * .16;
      paint();
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  }

  const nudge = by => settle(Math.round(target) + by);

  function measure() {
    cardWidth = heroCards[0].offsetWidth;
    paint();
  }

  function stopAmbient() {
    window.clearInterval(ambientTimer);
  }

  function startAmbient() {
    stopAmbient();
    if (reduceMotion.matches || document.hidden || drag) return;
    ambientTimer = window.setInterval(() => nudge(1), 3400);
  }

  function stopHover() {
    window.clearTimeout(hoverDelay);
    window.clearInterval(hoverTimer);
    hoverDirection = 0;
    delete heroRail.dataset.direction;
  }

  function setHover(direction) {
    if (direction === hoverDirection) return;
    stopHover();
    if (!direction || reduceMotion.matches || drag) return;
    hoverDirection = direction;
    heroRail.dataset.direction = direction > 0 ? 'forward' : 'backward';
    hoverDelay = window.setTimeout(() => {
      nudge(direction);
      hoverTimer = window.setInterval(() => nudge(direction), 980);
    }, 280);
  }

  heroRail.addEventListener('pointerenter', stopAmbient);
  heroRail.addEventListener('pointerleave', () => {
    if (drag) return;
    stopHover();
    startAmbient();
  });
  heroRail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    if (frame) cancelAnimationFrame(frame);
    frame = undefined;
    stopAmbient();
    stopHover();
    heroRail.setPointerCapture(event.pointerId);
    heroRail.dataset.dragging = 'true';
    target = position;
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

    const pitch = cardWidth * (1 + gap);
    const now = performance.now();
    const previous = position;
    position = drag.position - (event.clientX - drag.x) / pitch;
    drag.velocity = ((position - previous) / Math.max(now - drag.time, 1)) * 1000;
    drag.time = now;
    paint();
  });

  function endDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    const carried = Math.max(-2, Math.min(2, drag.velocity * .18));
    drag = undefined;
    heroRail.removeAttribute('data-dragging');
    if (heroRail.hasPointerCapture(event.pointerId)) heroRail.releasePointerCapture(event.pointerId);
    settle(Math.round(position + carried));
    startAmbient();
  }

  heroRail.addEventListener('pointerup', endDrag);
  heroRail.addEventListener('pointercancel', endDrag);
  heroRail.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    stopAmbient();
    nudge(event.key === 'ArrowRight' ? 1 : -1);
  });
  heroRail.addEventListener('blur', startAmbient);
  document.addEventListener('visibilitychange', startAmbient);
  window.addEventListener('resize', measure);
  reduceMotion.addEventListener('change', () => {
    measure();
    startAmbient();
  });

  heroCards.forEach(card => card.querySelector('img')?.setAttribute('draggable', 'false'));
  new ResizeObserver(measure).observe(heroRail);
  measure();
  startAmbient();
}
