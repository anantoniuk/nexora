import { renderCards } from "./result.js";
import { handleChooseType } from "./current-currency-category";

const freeCard = document.querySelector(".free");
const limitCard = document.querySelector(".limit");
const paidCard = document.querySelector(".paid");
const searchInput = document.querySelector(".result-search-input");
const resultList = document.querySelector(".result-list");
const URL = "https://6af04bd311a6aa866e7f3459.mockapi.io/tools";
export function showAllAi() {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні");
      }
      return response.json();
    })
    .then((allAi) => {
      renderCards(allAi);
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}
function priceFilter(price, event) {
  if (resultList) {
    resultList.scrollIntoView({ behavior: "smooth" });
  }
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні");
      }
      return response.json();
    })
    .then((allAi) => {
      const filteredTools = allAi.filter((ai) => ai.pricing === price);
      handleChooseType(event);
      renderCards(filteredTools);
    })
    .catch((error) => {
      console.error("Щось пішло не так:( ", error);
    });
}

freeCard.addEventListener("click", (event) => priceFilter("free", event));
limitCard.addEventListener("click", (event) => priceFilter("limited", event));
paidCard.addEventListener("click", (event) => priceFilter("paid", event));
showAllAi();
