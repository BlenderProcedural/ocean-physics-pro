// The silent loops load when they come near the screen and play only while they are on it.
(function () {
  var vids = [].slice.call(document.querySelectorAll('video[data-src]'));
  function start(v) {
    if (!v.getAttribute('src')) v.setAttribute('src', v.getAttribute('data-src'));
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* the poster stays */ });
  }
  if (!('IntersectionObserver' in window)) { vids.forEach(start); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) start(e.target);
      else if (e.target.getAttribute('src')) e.target.pause();
    });
  }, { rootMargin: '300px 0px' });
  vids.forEach(function (v) { io.observe(v); });
})();
