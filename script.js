/* Slick carousel + mobile version */
$(document).ready(function($) {
  if (window.innerWidth < 390) {
    $('.center').slick ({
      centerMode: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
    })
  }
  else {
    $('.center').slick({
      centerMode: true,
      slidesToShow: 5,
      infinite: true,
      prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
      nextArrow: "<img src='images/nex_arrow.png' class='nextar' alt='1'>"
  })
  }
})
;

/* Series slider */
$('.series_slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
})

/* Popup slider + mobile version */
$(document).ready(function($) {
  if (window.innerWidth < 390) {
    $('.popup_slider').slick ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      prevArrow: "<img src='images/prev_arrow.png' class='prevar_popup' alt='1'>",
      nextArrow: "<img src='images/nex_arrow.png' class='nextar_popup' alt='1'>"
    })
  }
  else {
    $('.popup_slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      prevArrow: "<img src='images/prev_arrow.png' class='prevar_popup' alt='1'>",
      nextArrow: "<img src='images/nex_arrow.png' class='nextar_popup' alt='1'>"
  })
  }
})
;

/* Car series switcher */
$( document ).ready(function() {
    $(".switcher").click(function(e) {
      $(this).addClass('active');{
        $('.tab-content.active').removeClass('active');
        $('.tab-content.' + $(this).data('target')).addClass('active');
      }
    })
  })

/* Select series switcher */
$('#series_select').change(function(){
  $('select.switchoption').hide();
  $('#switch_'+$(this).val()).show();
});
/* Select series switcher IMG*/
$('.switchoption').change(function(){
  $('img.switchoptionimg').hide();
  $('#switchimg_'+$(this).val()).show();
});

/* Fix Menu when scrolled */
$(window).scroll(function(){
  if ($(this).scrollTop() > 200) {
      $('header').addClass('fixed');
  } else {
      $('header').removeClass('fixed');
  }
});