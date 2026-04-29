// Jaya9 — safe navigation and form redirect
document.addEventListener('DOMContentLoaded', function () {
  function findOfferTarget(form) {
    if (form && form.getAttribute('action')) return form.getAttribute('action');
    var btn = document.querySelector('a.btn[href*="play-now"]');
    return btn ? btn.getAttribute('href') : 'play-now/';
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id && id.length > 1) {
        var el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); window.location.href = findOfferTarget(form); });
    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && field.type !== 'textarea') { e.preventDefault(); window.location.href = findOfferTarget(form); }
      });
    });
  });
});
