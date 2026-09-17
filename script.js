const featureTriggers = [...document.querySelectorAll('[data-feature]')];
const featureViews = [...document.querySelectorAll('[data-view]')];

function showFeature(name) {
  featureTriggers.forEach(trigger => {
    const active = trigger.dataset.feature === name;
    trigger.classList.toggle('is-active', active);
    trigger.setAttribute('aria-selected', String(active));
    trigger.tabIndex = active ? 0 : -1;
  });
  featureViews.forEach(view => {
    const active = view.dataset.view === name;
    view.hidden = !active;
    view.classList.toggle('is-active', active);
  });
}

featureTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => showFeature(trigger.dataset.feature));
  trigger.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? featureTriggers.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + featureTriggers.length) % featureTriggers.length;
    featureTriggers[nextIndex].focus();
    showFeature(featureTriggers[nextIndex].dataset.feature);
  });
});

showFeature('products');

const heroRail = document.querySelector('.hero-rail');
const heroCards = [...document.querySelectorAll('[data-card]')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (heroRail && heroCards.length) {
  let activeIndex = 2;
  let dragOffset = 0;
  let dragStartX = 0;
  let lastPointerX = 0;
  let lastPointerTime = 0;
  let pointerVelocity = 0;
  let dragging = false;
  let ambientTimer;
  let hoverDelay;
  let hoverTimer;
  let hoverDirection = 0;

  const wrap = value => ((value % heroCards.length) + heroCards.length) % heroCards.length;
  const spacing = () => window.innerWidth <= 500 ? 126 : window.innerWidth <= 800 ? 145 : 176;

  function paint(animate = true) {
    heroRail.dataset.keyboard = animate ? 'false' : 'true';
    heroCards.forEach((card, index) => {
      let distance = index - activeIndex;
      if (distance > heroCards.length / 2) distance -= heroCards.length;
      if (distance < -heroCards.length / 2) distance += heroCards.length;

      const exactDistance = distance + dragOffset / spacing();
      const depth = Math.abs(exactDistance);
      const visibleLimit = window.innerWidth <= 800 ? 2.35 : 4.2;
      const x = exactDistance * spacing();
      const y = Math.min(depth * 7, 24);
      const rotation = Math.max(-26, Math.min(26, exactDistance * -9));

      card.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${rotation}deg)`;
      card.style.opacity = depth <= visibleLimit ? String(Math.max(.28, 1 - depth * .16)) : '0';
      card.style.zIndex = String(20 - Math.round(depth * 2));
      card.style.pointerEvents = depth <= visibleLimit ? 'auto' : 'none';
      card.setAttribute('aria-hidden', String(depth > visibleLimit));
    });
    if (!animate) requestAnimationFrame(() => { heroRail.dataset.keyboard = 'false'; });
  }

  function goTo(index, animate = true) {
    activeIndex = wrap(index);
    dragOffset = 0;
    paint(animate);
  }

  function stopAmbient() {
    window.clearInterval(ambientTimer);
  }

  function startAmbient() {
    stopAmbient();
    if (reduceMotion.matches || document.hidden || dragging) return;
    ambientTimer = window.setInterval(() => goTo(activeIndex + 1), 3200);
  }

  function stopHoverMotion() {
    window.clearTimeout(hoverDelay);
    window.clearInterval(hoverTimer);
    hoverDirection = 0;
    delete heroRail.dataset.direction;
  }

  function startHoverMotion(direction) {
    if (direction === hoverDirection) return;
    stopHoverMotion();
    if (!direction || reduceMotion.matches || dragging) return;
    hoverDirection = direction;
    heroRail.dataset.direction = direction > 0 ? 'forward' : 'backward';
    hoverDelay = window.setTimeout(() => {
      goTo(activeIndex + direction);
      hoverTimer = window.setInterval(() => goTo(activeIndex + direction), 900);
    }, 240);
  }

  heroRail.addEventListener('pointermove', event => {
    if (dragging) {
      const now = performance.now();
      dragOffset = event.clientX - dragStartX;
      pointerVelocity = (event.clientX - lastPointerX) / Math.max(1, now - lastPointerTime);
      lastPointerX = event.clientX;
      lastPointerTime = now;
      paint();
      return;
    }

    if (event.pointerType === 'touch') return;
    const bounds = heroRail.getBoundingClientRect();
    const position = (event.clientX - bounds.left) / bounds.width;
    startHoverMotion(position < .36 ? -1 : position > .64 ? 1 : 0);
  });

  heroRail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    dragging = true;
    dragStartX = event.clientX;
    lastPointerX = event.clientX;
    lastPointerTime = performance.now();
    pointerVelocity = 0;
    stopAmbient();
    stopHoverMotion();
    heroRail.dataset.dragging = 'true';
    heroRail.setPointerCapture(event.pointerId);
  });

  function endDrag(event) {
    if (!dragging) return;
    dragging = false;
    heroRail.removeAttribute('data-dragging');
    if (heroRail.hasPointerCapture(event.pointerId)) heroRail.releasePointerCapture(event.pointerId);
    const momentumLimit = spacing() * .5;
    const momentum = Math.max(-momentumLimit, Math.min(momentumLimit, pointerVelocity * 70));
    const steps = Math.max(-2, Math.min(2, Math.round((dragOffset + momentum) / spacing())));
    goTo(activeIndex - steps);
    startAmbient();
  }

  heroRail.addEventListener('pointerup', endDrag);
  heroRail.addEventListener('pointercancel', endDrag);
  heroRail.addEventListener('pointerleave', () => {
    if (!dragging) {
      stopHoverMotion();
      startAmbient();
    }
  });
  heroRail.addEventListener('pointerenter', stopAmbient);
  heroRail.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    stopAmbient();
    goTo(activeIndex + (event.key === 'ArrowRight' ? 1 : -1), false);
  });
  heroRail.addEventListener('blur', startAmbient);
  document.addEventListener('visibilitychange', startAmbient);
  window.addEventListener('resize', () => paint(false));
  reduceMotion.addEventListener('change', startAmbient);

  paint(false);
  startAmbient();
}
