const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");

function handleBurgerClick() {
  nav.classList.toggle("nav--open");
  burger.classList.toggle("header__burger--active");
}

function handleNavLinkClick(event) {
  if (event.target.closest(".nav__link")) {
    nav.classList.remove("nav--open");
    burger.classList.remove("header__burger--active");
  }
}

burger.addEventListener("click", handleBurgerClick);
nav.addEventListener("click", handleNavLinkClick);
