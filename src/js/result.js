import resultTemplate from "bundle-text:../partials/templates/result.hbs";
import Handlebars from "handlebars";

const arrowIcon = new URL(`../img/arrow.svg`, import.meta.url).href;

const resultList = document.querySelector(".result-list");
const compiledTemplate = Handlebars.compile(resultTemplate);

export function renderCards(tools) {
  if (!resultList) return;
  const markup = compiledTemplate({ tools, arrowIcon });
  resultList.innerHTML = markup;
}
