const btn = document.querySelector(".jsNavDropBtn");
const container = document.querySelector(".jsNavDropContainer");

const containerOpenClass = "nav--dropdown__item-container--open";

btn.addEventListener("click", () => {
  container.classList.toggle(containerOpenClass);
});
