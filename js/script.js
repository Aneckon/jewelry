$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".top").addClass("shows");
    $(".header__scroll").addClass("header__block");
    $(".none").addClass("shows");
  } else {
    $(".top").removeClass("shows");
    $(".header__scroll").removeClass("header__block");
    $(".none").removeClass("shows");
  }
});

$('a[href="#top"]').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});


// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


$(document).ready(function () {
  $('.header__burger-img').click(function () {
    $('.header__mobile-menu').toggleClass('open__menu');
    $('.header__burger-img').toggleClass('header__burger-img__remove');
    $('body').toggleClass('fixed');
  });
});



var $status = $('.customslider .pagingInfo span.cp1');
var $status1 = $('.customslider .pagingInfo  span.cp2');
var $slickElement = $('.customslider .slider-centermode');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  if (slick.slideCount < 10) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('0' + i);
  } else {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i);
  }

  if (slick.slideCount < 10) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status1.text(' 0' + slick.slideCount);
  } else {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status1.text(slick.slideCount);
  }

});

$slickElement.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',
  speed: 1000,
  centerPadding: '31.1%',
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 0,
    }
  }]
});