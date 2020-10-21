const btn = document.querySelector(".hamburger__btn");
const container = document.querySelector(
  ".hamburger__item-container"
);

const containerOpenClass = "hamburger__item-container--open";

btn.addEventListener("click", () => {
  container.classList.toggle(containerOpenClass);
});

const SLIDETIME = 600;

const leftBtn = document.querySelector(".slider__arrow--left");
const rightBtn = document.querySelector(".slider__arrow--right");
const allItems = [...document.querySelectorAll(".slider__item")];
let clickable = true;
let active = null;
let newActive = null;

function initSlider() {
  allItems.forEach((item) => {
    item.setAttribute(
      "style",
      `transition: transform ${SLIDETIME}ms ease; animation-duration: ${SLIDETIME}ms`
    );
  });
}

function changeItem(right) {
  if (clickable) {
    clickable = false;

    active = document.querySelector(".active");
    const activeItemIndex = allItems.indexOf(active);

    if (right) {
      newActive = allItems[(activeItemIndex + 1) % allItems.length];
      active.classList.add("slideOutLeft");
      newActive.classList.add("slideInRight", "active");
    } else {
      newActive =
        allItems[(activeItemIndex + allItems.length - 1) % allItems.length];
      active.classList.add("slideOutRight");
      newActive.classList.add("slideInLeft", "active");
    }
  }
}

allItems.forEach((item) => {
  item.addEventListener("transitionend", () => {
    if (item == active && !clickable) {
      clickable = true;

      active.classList.remove(
        "active",
        "slideInLeft",
        "slideInRight",
        "slideOutLeft",
        "slideOutRight"
      );
    }
  });
});

rightBtn.addEventListener("click", () => {
  changeItem(true);
});

leftBtn.addEventListener("click", () => {
  changeItem(false);
});

initSlider();
