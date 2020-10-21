const btn = document.querySelector(".hamburger__btn");
const container = document.querySelector(
  ".hamburger__item-container"
);

const containerOpenClass = "hamburger__item-container--open";

btn.addEventListener("click", () => {
  container.classList.toggle(containerOpenClass);
});
