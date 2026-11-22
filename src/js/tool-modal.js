import Handlebars from "handlebars";
import toolModalTemplate from "bundle-text:../partials/templates/tool-modal.hbs";

const toolModalMarkup = Handlebars.compile(toolModalTemplate);

const toolModal = document.querySelector(".tool-modal");
const resultsList = document.querySelector(".results-list");
const toolBody = document.querySelector(".tool-modal__body");

if (toolModal && resultsList) {
  const getCardData = (card) => ({
    name: card.querySelector(".result-card__title").textContent,
    description: card.querySelector(".result-card__description").textContent,
    logo: card.querySelector(".result-card__logo").src,
    url: card.querySelector(".result-card__more").href,
    pricing: card.querySelector(".result-card__currency-category").textContent,
  });

  const handleToolModalOpen = (event) => {
    const card = event.target.closest(".result-card");
    if (!card || event.target.closest(".result-card__favorite")) {
      return;
    }
    event.preventDefault();

    const data = getCardData(card);
    toolBody.innerHTML = toolModalMarkup(data);
    toolModal.classList.add("is-open");
    document.body.classList.add("no-scroll");
  };

  const handleToolModalClose = (event) => {
    const isClose = event.target.closest(".tool-modal__close");
    const isBackdrop = event.target.classList.contains("tool-modal__backdrop");

    if (isClose || isBackdrop) {
      toolModal.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }
  };

  resultsList.addEventListener("click", handleToolModalOpen);
  toolModal.addEventListener("click", handleToolModalClose);
}
