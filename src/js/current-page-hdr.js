const nav = document.querySelector(".nav");
const links = nav.querySelectorAll(".nav__link");
const currentPage = location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();

  if (linkPage === currentPage) {
    link.classList.add("nav__link--current");
  } else {
    link.classList.remove("nav__link--current");
  }
});
