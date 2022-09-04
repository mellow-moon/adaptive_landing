let pricesSlideIndex = 2;
let pricesSlideButtons = document.querySelectorAll('.prices__slider-controls__toggle');
let pricesWrapper = document.querySelector('.prices__wrapper');
let pricesControls = document.querySelector('.prices__slider-controls')

function showPricesSlides(n) {
  if (n != pricesSlideIndex) {
    pricesSlideButtons[pricesSlideIndex - 1].classList.remove('current');
    pricesSlideButtons[n - 1].classList.add('current');
    pricesSlideIndex = n;
  }

  switch (n) {
    case 1:
      pricesWrapper.style.removeProperty("right");
      pricesWrapper.style.left = "280px";
      pricesControls.style.gridColumn = "1";
      break;
    case 2:
      pricesWrapper.style.left = "0px";
      pricesWrapper.style.right = "0px";
      pricesControls.style.gridColumn = "2";
      break;
    case 3:
      pricesWrapper.style.removeProperty("left");
      pricesWrapper.style.right = "280px";
      pricesControls.style.gridColumn = "3";
      break;
  };
}
