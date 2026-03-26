/**
 * VGI Prints — Scroll Reveal Animations
 * Uses IntersectionObserver to add .is-visible class on scroll
 */
(function () {
  'use strict';

  var targets = document.querySelectorAll('.vgi-animate');
  if (!targets.length) return;

  // Bail if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
