$(function () {
	/* Load Include Html */
	$('.header-area').load('/html/portfolio/black_hotel/include/header.html', function() {
		/* Header language box slide */
		$('.language .btn-language').click(function () {
			$(this).siblings().slideToggle()
		})

		/* Mobile Sub Menu SlideUp & Down */
		$('.mobile-menu>a').click(function () {
			$(this).next('.mobile-sub-menu').stop().slideToggle()
			$(this).toggleClass('active')
		})

		$('.btn-menu').click(function () {
			$('.header-mobile-menu').css("right", '0')
		})

		$('.close-side-menu .btn-close').click(function () {
			$('.header-mobile-menu').css("right", '-210px')
		})
	})
	$('.footer-area').load('/html/portfolio/black_hotel/include/footer.html')

	/* Home Main Banner Slider */
	$('.main-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 3000,
	})

	/* Home Fast Reservation Check in, Check out */
	var date = new Date();
	var yyyy = date.getFullYear();
	var mm = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + date.getMonth()+1;
	var dd = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

	$('#check-in-date').val(yyyy + "-" + mm + "-" + dd);
	$('#check-out-date').val(yyyy+"-"+mm+"-"+ (dd+1));


	/* Login Tab */
	$('.login-tab').click(function () {
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
		var index = $(this).index()

		$('.login-form').removeClass('active')
		$('.login-form').eq(index).addClass('active')
	})

	/* Hotel Room Detail Slide */
	var length = $('.hotel-room-detail-slide a').length
	$('.hotel-room-detail-slide a').eq(0).siblings().css({ 'left': '-100%' })
	var index = 0;

	setInterval(function () {
		if (index == length-1) {
			index = 0
		} else {
			index++
		}
		
		$('.hotel-room-detail-slide a').eq(index).animate({"left":"0"})
		$('.hotel-room-detail-slide a').eq(index).siblings().animate({ "left": "-100%" })
		
		$('.hotel-thumbnail-list img').removeClass('active')
		$('.hotel-thumbnail-list img').eq(index).addClass('active')
	},3000)
	
	$('.hotel-thumbnail-list img').click(function () {
		var idx = $(this).index();
		index = idx;
		
		$('.hotel-room-detail-slide a').eq(index).animate({ "left": "0" })
		$('.hotel-room-detail-slide a').eq(index).siblings().animate({ "left": "-100%" })
		$('.hotel-thumbnail-list img').removeClass('active')
		$('.hotel-thumbnail-list img').eq(index).addClass('active')
	})

})