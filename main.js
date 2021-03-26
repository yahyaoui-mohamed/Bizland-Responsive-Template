let toggleBtn = document.querySelector(".navbar-toggle");
let navbarNav = document.querySelector(".navbar .nav");
let navbar = document.querySelector(".navbar");
let upperNav = document.querySelector(".upper-nav");
onscroll = function () {
  if (this.pageYOffset > upperNav.clientHeight) {
    navbar.classList.add("fixed");
  }
  else {
    navbar.classList.remove("fixed");
  }
}

$(".navbar-toggle").click(function (e) {
  e.preventDefault();

  $(".navbar .nav").slideToggle();

});