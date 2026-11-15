// ===== Tema (light / dark) =====
// Tanlangan tema brauzerda saqlanadi. Saqlanmagan bo'lsa — qurilma sozlamasi olinadi.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}

  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function () {
    // Tema tugmasi
    document.getElementById('theme-toggle').addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });

    // Yopishqoq menyu: scroll boshlanganda fon paydo bo'ladi
    var bar = document.getElementById('nav-bar');
    var menuBtn = document.getElementById('menu-toggle');
    function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll); // brauzer scroll joyini tiklagandan keyin
    onScroll();

    // Telefon menyusi: ochish / yopish
    function setMenu(open) {
      bar.classList.toggle('menu-open', open);
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
    }
    menuBtn.addEventListener('click', function () {
      setMenu(!bar.classList.contains('menu-open'));
    });
    // Havola tanlanganda yoki Esc bosilganda menyu yopiladi
    document.getElementById('nav-links').addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });

    // Scroll'da bo'limlar yumshoq paydo bo'ladi (har element bir marta)
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px' });

      document.querySelectorAll('.section-head, .skills-panel, .grid > *, .faq-item, .contact-panel').forEach(function (el) {
        // Bir qatordagi kartalar ketma-ket chiqadi
        if (el.matches('.grid > *, .faq-item')) {
          var i = Array.prototype.indexOf.call(el.parentNode.children, el);
          el.style.setProperty('--reveal-delay', (i * 0.06) + 's');
        }
        el.classList.add('reveal');
        io.observe(el);
      });
    }

    // Ko'nikmalar slayderi (strelkalar)
    var track = document.getElementById('skills-track');
    var prev = document.getElementById('skills-prev');
    var next = document.getElementById('skills-next');

    function step() {
      var card = track.querySelector('.skill-card');
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.offsetWidth + gap;
    }
    function updateArrows() {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    }
    prev.addEventListener('click', function () { track.scrollBy({ left: -step() }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step() }); });
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();

    // Footerdagi yilni avtomatik yangilash
    document.getElementById('year').textContent = new Date().getFullYear();
  });
})();
