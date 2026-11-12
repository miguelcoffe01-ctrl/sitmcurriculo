(function () {
  // Contatos montados aqui para não ficarem escritos no HTML (dificulta coleta por robôs)
  var d = {
    wa: "aHR0cHM6Ly93YS5tZS81NTgxOTg1MTg5MDM1P3RleHQ9T2wlQzMlQTElMjBNaWd1ZWwhJTIwVmklMjBzdWElMjBwJUMzJUExZ2luYSUyMGUlMjBnb3N0YXJpYSUyMGRlJTIwY29udmVyc2FyLg==",
    em: "bWlndWVsY29mZmUwMUBnbWFpbC5jb20=",
    wt: "KzU1IDgxIDk4NTE4LTkwMzU="
  };
  function g(k) { return atob(d[k]); }
  document.querySelectorAll('[data-c="wa"]').forEach(function (a) { a.href = g("wa"); });
  document.querySelectorAll('[data-c="em"]').forEach(function (a) { a.href = "mailto:" + g("em"); });
  document.querySelectorAll('[data-t="wa"]').forEach(function (e) { e.textContent = g("wt"); });
  document.querySelectorAll('[data-t="em"]').forEach(function (e) { e.textContent = g("em"); });

  // Entrada suave ao rolar
  var els = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (n) { io.observe(n); });
  } else {
    els.forEach(function (n) { n.classList.add("on"); });
  }
})();
