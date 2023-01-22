$(function () {
	/* AOS */
	AOS.init();
	
	/* Home section을 지나면 header을 보이게함 */
	$(window).on('scroll',function() {
		if (!checkVisible($('#home'))) {
			$('header').css({ "top": '0' })
		}
		if (checkScrollTop()) {
			$('header').css({ "top": '-70px' })
		}
		if (checkVisible($('#home'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(1) a').addClass('active')
		}
		if (checkVisible($('#about'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(2) a').addClass('active')
		}
		if (checkVisible($('#skill'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(3) a').addClass('active')
		}
		if (checkVisible($('#portfolio'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(4) a').addClass('active')
		}
		if (checkVisible($('#mobile'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(5) a').addClass('active')
		}
		if (checkVisible($('#clone'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(6) a').addClass('active')
		}
		if (checkVisible($('#coding'))) { 
			$('.pc_menu .gnb a').removeClass('active')
			$('.pc_menu .gnb:nth-child(7) a').addClass('active')
		}
	});

	/* Header Mobile Menu */
	$('.header-mobile-menu').click(function () {
		$('.mobile-menu').fadeIn()
	})

	$('.mobile-close-menu, .mobile-menu-content li').click(function () {
		$('.mobile-menu').fadeOut()
	})

	/* Home Background Animation */
	let idx = 0;
	setInterval(function () {
		if (idx == 0) {
			$('.animate-img').css('background', 'url(/images/animate-bg2.png) no-repeat center center')
			$('.animate-img').css('background-size', '500px')
			idx = 1;
		} else {
			$('.animate-img').css('background', 'url(/images/animate-bg1.png) no-repeat center center')
			$('.animate-img').css('background-size', '500px')
			idx = 0;
		}
	},3000)

	/* Portfolio Slider */
	$('.portfolio-items').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true
	});

	/* Mobile Slider */
	$('.mobile-items').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true
	});

	/* Coding Tab Menu Fade In & Fade Out */
	$('input[name=coding-tab-menu]').on('change', function() {
		var id = $(this).attr('id')
		$('.coding-tab').hide()
		$('.coding-tabs .'+id).fadeIn(1000)
	});	
})

function checkVisible( elm, eval ) {
	eval = eval || "object visible";
	var viewportHeight = $(window).height(), // 뷰포트 높이
		scrolltop = $(window).scrollTop(),
		y = $(elm).offset().top,
		elementHeight = $(elm).height();   
	
	if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

function checkScrollTop() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop == 0) {
        return true;
    } else {
        return false;
    }
}
