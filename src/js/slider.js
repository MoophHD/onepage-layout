const SLIDETIME = 600;

const leftBtn = document.querySelector(".jsSlideLeft");
const rightBtn = document.querySelector(".jsSlideRight");
const allItems = [...document.querySelectorAll(".jsSlide")];
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

// HANDLE SWIPE LEFT & SWIPE RIGHT

const swipeThreshold = 5;
const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(event) {
  return event.touches;
}

function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!xDown) {
    return;
  }
  var xUp = event.touches[0].clientX;
  var xDiff = xDown - xUp;

  if (Math.abs(xDiff) > swipeThreshold) {
    if (xDiff >= 0) {
      changeItem(true);
    } else {
      changeItem(false);
    }
  }

  xDown = null;
}
