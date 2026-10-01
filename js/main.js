(function () {
  'use strict';

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  /* Header – pozadina nakon skrolovanja */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobilni meni */
  function setMenu(open) {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Zatvori meni' : 'Otvori meni');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () {
    setMenu(!header.classList.contains('is-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  /* Pre / posle klizač */
  var compare = document.querySelector('.ba__compare');
  if (compare) {
    var range = compare.querySelector('.ba__range');
    range.addEventListener('input', function () {
      compare.style.setProperty('--pos', range.value + '%');
    });
  }

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  /* Fade-in sekcija */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { revealObserver.observe(el); });

  /* Aktivna stavka u navigaciji */
  var links = {};
  nav.querySelectorAll('.nav__list a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = links[entry.target.id];
      if (link && entry.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(links).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) navObserver.observe(section);
  });
})();
