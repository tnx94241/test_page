// js/menu-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav .toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));

      const submenu = button.nextElementSibling;
      if (submenu) {
        submenu.hidden = expanded;
      }
    });
  });
});

