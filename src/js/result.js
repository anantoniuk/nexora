import resultTemplate from "bundle-text:../partials/templates/result.hbs";
import Handlebars from "handlebars";

const favIcon = new URL("../img/fav.png", import.meta.url).href;
const arrowIcon = new URL("../img/arrow.png", import.meta.url).href;

const resultList = document.querySelector(".result-list");
const compiledTemplate = Handlebars.compile(resultTemplate);

export function renderCards(tools) {
  if (!resultList) return;
  const markup = compiledTemplate({ tools, favIcon, arrowIcon });
  resultList.innerHTML = markup;
}
