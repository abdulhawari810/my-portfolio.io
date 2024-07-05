const nav = document.querySelectorAll(".navbar-items"),
  divider = document.querySelectorAll(".nav-divider"),
  toggle = document.querySelector(".toggle"),
  navbar = document.querySelector(".nav");

  for (let i = 0; i < nav.length && i < divider.length; i++) {
    if(window.location.href === "http://127.0.0.1:5500/portfolio/index.html"){
      nav[0].classList.add("active");
      divider[0].classList.add("active");
  }
  if (nav[i].href === window.location.href) {
    nav[i].classList.add("active");
    divider[i].classList.add("active");
  }
}

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
});
