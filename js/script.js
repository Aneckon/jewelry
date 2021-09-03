$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".top").addClass("shows");
    $(".header").addClass("header-scrol");
    $(".header__scroll").addClass("header__block");
    $(".none").addClass("shows");
  } else {
    $(".top").removeClass("shows");
    $(".header").removeClass("header-scrol");
    $(".header__scroll").removeClass("header__block");
    $(".none").removeClass("shows");
  }
});

$('a[href="#top"]').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});


$(document).ready(function () {
  $('.header__burger-img').click(function () {
    $('.header__mobile-menu').toggleClass('open__menu');
    $('.header__burger-img').toggleClass('header__burger-img__remove');
    $('body').toggleClass('fixed');
  });
});


$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 100,
    horizontalOrder: true,
  }
});