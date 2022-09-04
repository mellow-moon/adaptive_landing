let slideInd = 0;
let slide = document.querySelectorAll('.slider-list__item');

function nextSlide() {
  if (slideInd < 2) {
    slides[slideInd].classList.remove('slide-current');
    slides[slideInd + 1].classList.add('slide-current');
    slideInd += 1;
  } else {
    slides[slideInd].classList.remove('slide-current');
    slideInd = 0;
    slides[slideInd].classList.add('slide-current');
  }
}

function prevSlide() {
  if (slideInd > 0) {
    slides[slideInd].classList.remove('slide-current');
    slides[slideInd - 1].classList.add('slide-current');
    slideInd -= 1;
  } else {
    slides[slideInd].classList.remove('slide-current');
    slideInd = 2;
    slides[slideInd].classList.add('slide-current');
  }
}
