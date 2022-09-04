let slideIndex = 1;
let slideButtons = document.querySelectorAll('.reiviews-slider__toggle');
let slides = document.querySelectorAll('.reiviews-slider__content__list__item');

function showSlides(n) {
  if (n != slideIndex) {
    slideButtons[slideIndex - 1].classList.remove('current');
    slideButtons[n - 1].classList.add('current');
    slides[slideIndex - 1].classList.remove('slide-current');
    slides[n - 1].classList.add('slide-current');
    slideIndex = n;
  }
}
