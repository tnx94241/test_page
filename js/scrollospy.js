document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.scroll-link');
  const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));

  window.addEventListener('scroll', () => {
    let currentIndex = sections.findIndex((section, i) => {
      const next = sections[i + 1];
      const sectionTop = section.offsetTop;
      const nextTop = next ? next.offsetTop : Infinity;
      return window.scrollY >= sectionTop - 100 && window.scrollY < nextTop - 100;
    });

    links.forEach((link, i) => {
      if (i === currentIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});

