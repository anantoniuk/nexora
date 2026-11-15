const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".modal__backdrop");
const openBtn = document.querySelector(".header__btn--login");
const closeBtn = document.querySelector(".modal__close");
const form = document.querySelector(".modal__form");

function handleModalOpen() {
  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function handleModalClose() {
  modal.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

function handleFormSubmit(event) {
  event.preventDefault();

  const data = {
    email: form.email.value,
    password: form.password.value,
  };
  console.log("Вхід:", data);

  form.reset();
  handleModalClose();
}

openBtn.addEventListener("click", handleModalOpen);
closeBtn.addEventListener("click", handleModalClose);
backdrop.addEventListener("click", handleModalClose);
form.addEventListener("submit", handleFormSubmit);
