import resultTemplate from "bundle-text:../partials/templates/result.hbs";
import Handlebars from "handlebars";

const result = document.querySelector(".result-container");
const compiledTemplate = Handlebars.compile(resultTemplate);

export function renderCards(data) {
  const markup = compiledTemplate(data);
  result.innerHTML = markup;
}
