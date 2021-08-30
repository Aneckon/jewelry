$(window).scroll(function(event){
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".top").addClass("show");
  } else {
    $(".top").removeClass("show");
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