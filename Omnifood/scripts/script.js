// Footer Year
const footerYear = document.querySelector('.footer-year');
footerYear.textContent = new Date().getFullYear();

// Mobile Navigation
const header = document.querySelector('.header');
const navBtn = document.querySelector('.btn-nav-mobile');
navBtn.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

// Sticky Navigation
const heroSection = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    else document.body.classList.remove('sticky');
  },
  {
    root: null, // viewport
    threshold: 0,
    rootMargin: '-80px', // smooth effect before threshold
  }
);
observer.observe(heroSection);
