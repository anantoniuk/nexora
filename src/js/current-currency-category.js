export const handleChooseType = (event) => {
  const target = event.target.closest(".curency-choice");
  if (!target) {
    return;
  }

  const lastCurrent = document.querySelector(".curency-choice-current");
  if (lastCurrent) {
    lastCurrent.classList.remove("curency-choice-current");
  }

  target.classList.add("curency-choice-current");
};
