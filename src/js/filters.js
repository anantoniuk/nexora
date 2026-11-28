import { showAllAi } from "./currency-categories.js";

const allCategoriesLink = document.querySelector(".all-categories");
const filtersList = document.querySelector(".filters__list");

document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  let filter = url.searchParams.get("category");

  if (!filter) {
    filter = "all";
    url.searchParams.set("category", filter);
    history.replaceState(null, "", url); // MDN Reference
  }

  showAllAi();

  const filterEl = document.querySelector(`.filter--${filter}`);
  if (filterEl) filterEl.classList.add("filter--active");
});

allCategoriesLink.addEventListener("click", (e) => {
  e.preventDefault();

  const url = new URL(allCategoriesLink.href);
  url.hash = "categories";

  window.location.href = url;
});

filtersList.addEventListener("click", (e) => {
  const filterBtn = e.target.closest("[data-filter]");
  if (!filterBtn) return;

  const filter = filterBtn.dataset.filter;
  const resultSubtitle = document.querySelector(".result-subtitle");
  resultSubtitle.textContent = `Добірка сервісів для категорії «${filter}» `;

  const url = new URL(window.location.href);
  url.searchParams.set("category", filter);

  history.pushState(null, "", url); // MDN Reference

  showAllAi();

  document.querySelectorAll(".filter--active").forEach((el) => {
    el.classList.remove("filter--active");
  });

  const filterEl = document.querySelector(`.filter--${filter}`);
  if (filterEl) filterEl.classList.add("filter--active");
});
