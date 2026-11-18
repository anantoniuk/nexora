const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const categoryItems = document.querySelectorAll(".categories__item");
const categoriesEmpty = document.querySelector(".categories__empty");

const handleSearchSubmit = (event) => {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();
  let found = 0;

  categoryItems.forEach((item) => {
    const text = item
      .querySelector(".category__middle")
      .textContent.toLowerCase();
    const isMatch = text.includes(query);

    if (isMatch) {
      item.classList.remove("categories__item--hidden");
      found++;
    } else {
      item.classList.add("categories__item--hidden");
    }
  });

  if (found === 0) {
    categoriesEmpty.classList.add("categories__empty--visible");
  } else {
    categoriesEmpty.classList.remove("categories__empty--visible");
  }
};

searchForm.addEventListener("submit", handleSearchSubmit);
