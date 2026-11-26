import { renderCards } from "./result.js";

const freeCard = document.querySelector(".free");
const limitCard = document.querySelector(".limit");
const paidCard = document.querySelector(".paid");
const resultList = document.querySelector(".result-list");
const emptyMessage = document.querySelector(".empty-message");

const API_URL = "https://6af04bd311a6aa866e7f3459.mockapi.io/tools";

const categoryAliases = {
  texts: "text",
  coding: "programming",
  sound: "audio_music",
};

export function showAllAi() {
  const url = new URL(window.location.href);
  const category = url.searchParams.get("category");
  const price = url.searchParams.get("price");

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні");
      }

      return response.json();
    })
    .then((allAi) => {
      const filteredTools = allAi.filter((ai) => {
        const matchesPrice = !price || ai.pricing === price;
        const matchesCategory =
          !category ||
          category === "all" ||
          ai.type === category ||
          ai.type === categoryAliases[category];

        return matchesPrice && matchesCategory;
      });

      if (emptyMessage) {
        emptyMessage.classList.toggle("hidden", filteredTools.length > 0);
      }

      renderCards(filteredTools);
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}

function priceFilter(price) {
  const url = new URL(window.location.href);
  url.searchParams.set("price", price);

  history.pushState(null, "", url); // MDN Reference

  if (resultList) {
    resultList.scrollIntoView({ behavior: "smooth" });
  }

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні");
      }

      return response.json();
    })
    .then((allAi) => {
      const filteredTools = allAi.filter((ai) => {
        const matchesPrice = !price || ai.pricing === price;
        const matchesCategory =
          !category ||
          category === "all" ||
          ai.type === category ||
          ai.type === categoryAliases[category];

        return matchesPrice && matchesCategory;
      });

      co

      if (emptyMessage) {
        emptyMessage.classList.toggle("hidden", filteredTools.length > 0);
      }

      renderCards(filteredTools);
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}

freeCard.addEventListener("click", () => priceFilter("free"));
limitCard.addEventListener("click", () => priceFilter("limited"));
paidCard.addEventListener("click", () => priceFilter("paid"));
