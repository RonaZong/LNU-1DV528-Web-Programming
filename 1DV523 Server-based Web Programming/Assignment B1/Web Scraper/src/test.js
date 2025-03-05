!(function () {
  function c() {
    var a = document.getElementById("movies");
    a.style.display = "block";
  }
  function d() {
    var c = document.getElementById("check");
    (c.style.display = "block"),
      (c.onclick = function () {
        var c = new XMLHttpRequest();
        (c.onreadystatechange = function () {
          if (4 === this.readyState) {
            var a = JSON.parse(this.responseText);
            0 === a.length
              ? (message.innerHTML = "This movie is not available this day")
              : ((message.innerHTML = ""),
                a.forEach(function (a) {
                  var c =
                    (a.time,
                    0 === a.status ? "Fully booked" : "Sites available");
                  message.innerHTML += a.time + " : " + c + "<br />";
                }));
          }
        }),
          c.open("GET", "cinema/check?day=" + a + "&movie=" + b),
          c.send();
      });
  }
  $(document).ready(function () {
    $("select").material_select();
  });
  var a, b;
  window.onload = function () {
    var e = document.getElementById("day");
    e.onchange = function (b) {
      (a = this.options[this.selectedIndex].value), c();
    };
    var f = document.getElementById("movie");
    f.onchange = function (a) {
      (b = this.options[this.selectedIndex].value), d();
    };
  };
})();
