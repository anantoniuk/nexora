import _ from "lodash";
import { renderCards } from "./result.js";
import { showAllAi } from "./currency-categories.js";
const searchInput = document.querySelector(".result-search-input");
const resultList = document.querySelector(".result-list");
function succesAi(aiList) {
  renderCards(aiList);
}

const getAi = (aiName) => {
  const URL = `https://6af04bd311a6aa866e7f3459.mockapi.io/tools?name=${aiName}`;
  fetch(URL)
    .then((response) => {
      if (response.status === 404) {
        return [];
      }
      if (!response.ok) {
        throw new Error(`Помилка: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.length === 0) {
        resultList.innerHTML = "AI не знайдено";
        return;
      }
      console.log(data);
      succesAi(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleSearchAi = () => {
  const input = searchInput.value.trim();
  if (!input) {
    showAllAi();
    return;
  }
  getAi(input);
};

const debouncedSearchAi = _.debounce(handleSearchAi, 500);
searchInput.addEventListener("input", debouncedSearchAi);
