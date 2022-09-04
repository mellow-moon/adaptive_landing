var navToggle = document.querySelector('.page-menu__button');
var navMain = document.querySelector('.page-menu__nav');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle("change");

  if (navMain.classList.contains('page-menu__nav--closed')) {
    navMain.classList.remove('page-menu__nav--closed');
    navMain.classList.add('page-menu__nav--opened');
  } else {
    navMain.classList.add('page-menu__nav--closed');
    navMain.classList.remove('page-menu__nav--opened');
  }
})
