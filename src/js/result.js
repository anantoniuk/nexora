import resultTemplate from "bundle-text:../partials/templates/result.hbs";
import Handlebars from "handlebars";

const result = document.querySelector(".result-container");

function renderCards(data) {
  const markup = resultTemplate(data);
  result.innerHTML = markup;
}

renderCards(filteredTools);
