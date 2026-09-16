const stage = document.querySelector('#demo-stage');
const panels = [...document.querySelectorAll('[data-panel]')];
const previous = document.querySelector('#prev-step');
const next = document.querySelector('#next-step');
const stepNumber = document.querySelector('#step-number');
const progress = document.querySelector('#demo-progress-bar');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (stage && panels.length && previous && next && stepNumber && progress) {
  let step = 0;

  function showStep(value) {
    step = Math.max(0, Math.min(panels.length - 1, value));
    stage.dataset.step = String(step);
    panels.forEach((panel, index) => {
      const active = index === step;
      panel.classList.toggle('is-active', active);
      panel.setAttribute('aria-hidden', String(!active));
      panel.inert = !active;
    });
    stepNumber.textContent = String(step + 1).padStart(2, '0');
    progress.style.transform = `scaleX(${(step + 1) / panels.length})`;
    previous.disabled = step === 0;
    next.disabled = step === panels.length - 1;
  }

  previous.addEventListener('click', () => showStep(step - 1));
  next.addEventListener('click', () => showStep(step + 1));
  showStep(0);
}

const coverflow = document.querySelector('.coverflow');
const coverflowCards = [...document.querySelectorAll('[data-card]')];
const coverflowPrevious = document.querySelector('[data-coverflow-previous]');
const coverflowNext = document.querySelector('[data-coverflow-next]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (coverflow && coverflowCards.length && coverflowPrevious && coverflowNext) {
  let activeCard = 0;
  let autoplay;
  let pointerStart = null;

  function distanceFromActive(index) {
    let distance = index - activeCard;
    const halfway = coverflowCards.length / 2;
    if (distance > halfway) distance -= coverflowCards.length;
    if (distance < -halfway) distance += coverflowCards.length;
    return distance;
  }

  function paintCoverflow() {
    const spacing = Math.min(window.innerWidth * 0.21, 310);
    coverflowCards.forEach((card, index) => {
      const distance = distanceFromActive(index);
      const visible = Math.abs(distance) <= 2;
      const depth = Math.max(0, 140 - Math.abs(distance) * 58);
      const scale = Math.max(.78, 1 - Math.abs(distance) * .1);
      card.style.transform = `translateX(${distance * spacing}px) translateZ(${depth}px) rotateY(${-distance * 18}deg) scale(${scale})`;
      card.style.opacity = visible ? String(Math.max(.3, 1 - Math.abs(distance) * .24)) : '0';
      card.style.filter = distance === 0 ? 'none' : 'brightness(.82) saturate(.82)';
      card.style.pointerEvents = visible ? 'auto' : 'none';
      card.style.zIndex = String(20 - Math.abs(distance));
      card.dataset.active = String(distance === 0);
      card.tabIndex = distance === 0 ? 0 : -1;
      card.setAttribute('aria-hidden', String(!visible));
    });
  }

  function goTo(nextIndex, userInitiated = false) {
    activeCard = (nextIndex + coverflowCards.length) % coverflowCards.length;
    paintCoverflow();
    if (userInitiated) pauseAutoplay();
  }

  function pauseAutoplay() {
    window.clearInterval(autoplay);
  }

  function startAutoplay() {
    pauseAutoplay();
    if (!prefersReducedMotion.matches) {
      autoplay = window.setInterval(() => goTo(activeCard + 1), 3800);
    }
  }

  coverflowPrevious.addEventListener('click', () => goTo(activeCard - 1, true));
  coverflowNext.addEventListener('click', () => goTo(activeCard + 1, true));
  coverflowCards.forEach((card, index) => card.addEventListener('click', () => goTo(index, true)));
  coverflow.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeCard - 1, true);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeCard + 1, true);
    }
  });
  coverflow.addEventListener('pointerdown', event => {
    pointerStart = event.clientX;
    pauseAutoplay();
  });
  coverflow.addEventListener('pointerup', event => {
    if (pointerStart === null) return;
    const travel = event.clientX - pointerStart;
    if (Math.abs(travel) > 36) goTo(activeCard + (travel < 0 ? 1 : -1), true);
    pointerStart = null;
    startAutoplay();
  });
  coverflow.addEventListener('pointercancel', () => {
    pointerStart = null;
    startAutoplay();
  });
  coverflow.addEventListener('mouseenter', pauseAutoplay);
  coverflow.addEventListener('mouseleave', startAutoplay);
  coverflow.addEventListener('focusin', pauseAutoplay);
  coverflow.addEventListener('focusout', event => {
    if (!coverflow.contains(event.relatedTarget)) startAutoplay();
  });
  window.addEventListener('resize', paintCoverflow);
  prefersReducedMotion.addEventListener('change', startAutoplay);
  paintCoverflow();
  startAutoplay();
}

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
  });
  mobileNav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    }
  });
}
