// Minimal JS for small niceties
(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();