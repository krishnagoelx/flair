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
