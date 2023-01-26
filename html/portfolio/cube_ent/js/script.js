$(function () {
	/* ScrollTop Button Show & Hide */
	$(document).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 500) {
			$('.scrollup button').css('opacity', '1');
		} else if (height <= 150) {
			$('.scrollup button').css('opacity', '0');
		}
	});

	/* Video Area Slick Slider */
	$('.video-area').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 3000,
	})

	/* responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		] */
	
	$('.menubar').click(function () {
		$('.right-menu-pan').css('right', '0')
	})

	$('.xi-close').click(function () {
		$('.right-menu-pan').css('right', '-300px')
	})

	$('.menu-area ul > li').mouseenter(function () {
		let menu_i = $(this).index();
		if (menu_i < 3) {
			$('.menu-category').css({
				display: 'none'
			}).eq($(this).index()).css({
				display: 'grid'
			})
			$('.header-menu-pan').stop().slideDown()
			
		} else {
			$('.header-menu-pan').stop().slideUp()
		}
	});

	$('.header-menu-pan').mouseleave(function () {
		$('.header-menu-pan').stop().slideUp()
	})

	$('.right-menu li .menu').click(function () {
		$('.sub-items').slideUp()

		if ($(this).siblings().css('display') == 'none') {
			$(this).next().slideDown()
		}
	})

})

function popupShowAndHide() {
	$(".popup").slideToggle(500);
}

function scrollToTop() {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
}
