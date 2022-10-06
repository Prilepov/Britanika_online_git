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
    infinite: true,
})

/* Popup slider */
let slick = $('.popup_slider').slick({
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

/* Pop-up */
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

$('.popup-open').click(function() {
    slick.slick('refresh');
});

/* Car series switcher */
$( document ).ready(function() {
    $(".switcher").click(function(e) {
      $(this).addClass('active');{
        $('.tab-content.active').removeClass('active');
        $('.tab-content.' + $(this).data('target')).addClass('active');
      }
    })
  })
