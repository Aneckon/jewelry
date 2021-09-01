$(window).scroll(function(event){
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".top").addClass("show");
    $(".header__scroll").addClass("header__block");
    $(".none").addClass("show");
  } else {
    $(".top").removeClass("show");
    $(".header__scroll").removeClass("header__block");
    $(".none").removeClass("show");
  }
});

$('a[href="#top"]').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
    return false;
});


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});


$(document).ready(function() {
  $('.header__burger-img').click(function() {
      $('.header__mobile-menu').toggleClass('open__menu');
      $('.header__burger-img').toggleClass('header__burger-img__remove');
      $('body').toggleClass('fixed');
  });
});