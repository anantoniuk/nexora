const fetchAPI = async (
  BASE_URL = "https://6af04bd311a6aa866e7f3459.mockapi.io/tools/",
) => {
  const res = await fetch(BASE_URL);
  if (!res.ok)
    throw new Error(
      `Не вдалося отримати дані з ${BASE_URL}, статус: ${res.status}`,
    );
  return res.json();
};

const categoriesList = document.querySelector(`.categories__list`);

const renderCategories = async () => {
  if (!categoriesList) return;

  try {
    const data = await fetchAPI();
    const categories = [...categoriesList.querySelectorAll(`.category`)];
    categories.map(async (card) => {
      const className = [...card.classList].find((name) =>
        name.startsWith("category--"),
      );

      const type = className.replace("category--", "");
      const typeAliases = {
        texts: "text",
        coding: "programming",
        sound: "audio_music"
      };

      const itemType = typeAliases[type] || type;
      const count = data.filter(
        (item) => item.type?.toLowerCase() === itemType,
      ).length;

      const label = card.querySelector(`.instrument-count`);
      label.textContent = count;
    });
  } catch (e) {
    console.error(e);
  }
};

renderCategories();
