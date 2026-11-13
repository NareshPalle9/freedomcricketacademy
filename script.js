document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', () => nav.classList.remove('open'));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 40), { passive: true });

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Animated counters
const counters = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 50));
    const t = setInterval(() => {
      n = Math.min(target, n + step);
      el.textContent = n;
      if (n >= target) clearInterval(t);
    }, 30);
    counters.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach((el) => counters.observe(el));

// Demo handler: connect to a backend or form service (e.g. Formspree) to receive enquiries.
document.getElementById('enquiry').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Thanks! We will contact you soon.';
  e.target.reset();
});

// Paste your Google Form link here (see create-registration-form.gs).
const REGISTRATION_URL = 'PASTE_GOOGLE_FORM_LINK_HERE';
document.querySelectorAll('.register-link').forEach((a) => {
  a.href = REGISTRATION_URL;
  a.addEventListener('click', (e) => {
    if (!/^https?:/.test(REGISTRATION_URL)) { e.preventDefault(); alert('Registration form link is not configured yet.'); }
  });
});
