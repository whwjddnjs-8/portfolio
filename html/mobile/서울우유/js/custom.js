$(function () {
	/* Load Include Html */
	$('.gnb-include').load('../include/gnb.html')
	$('.header-include').load('../include/header.html')
	$('.page-include').load('../include/page.html')

	/* #### Common JS #### */

	/* 공통 좋아요 버튼 */
	$('.btn-like').click(function () {
		$(this).toggleClass('active')
	})
	/* #### Common JS #### */

	/* Signup All Agree Check */
	$('.signup-all-check').click(function () {
		if ($(this).is(':checked')) {
			$('.part-agree input[type=checkbox]').prop("checked", true)
		}
	})

	/* Home Main Slider */
	$('.home-main-slider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: false,
  		autoplaySpeed: 2000,
	});

	/* Home 특가데이 특가상품 Item Slider */
	$('.product-sell-items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			infinite : false
	})

	/* Main Menu Slide Menu */
	$('ul.main-menu-list li.menu > a').first().addClass('active')
	$('ul.main-menu-list li.menu > a').first().siblings('ul.sub-menu-list').slideDown()
	$('ul.main-menu-list li.menu>a').click(function () {
		$(this).parent().siblings().children('a').removeClass('active')
		$(this).parent().siblings().children('ul.sub-menu-list').slideUp()
		$(this).toggleClass('active')
		$(this).siblings('ul.sub-menu-list').slideToggle()
	})

	/* Home Main Slider */
	$('.product-introduce-detail-slider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: false,
  		autoplaySpeed: 2000,
	});

	/* Cart Delete Popup Show */
	$('.btn-delete-cart-item').click(function () {
		$('.delete-cart-item-popup').show()
	})
	
	/* Popup Close */
	$('.p-btn-cancel, .btn-close-popup').click(function () {
		$('.delete-cart-item-popup').hide()
	})

	/* MyPage 최근 본 상품 Slider */
	$('.recent-view-items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			infinite : false
	})

	/* 찜한 상품 전체선택 Click Event */
	$('#product-like-check-all').click(function () {
		if ($(this).is(':checked')) { 
			$('.product-like-items .product-sell-item .thum input[type=checkbox]').prop("checked", true)
		} else {
			$('.product-like-items .product-sell-item .thum input[type=checkbox]').prop("checked", false)
		}
		
	})
})

/* Product Detail 수량 Input Number */
function increaseBtn() {
	var cnt = $('#product-cnt').val()
	$('#product-cnt').val(Number(cnt) + 1)
}

function decreaseBtn() {
	var cnt = $('#product-cnt').val()
	if (Number(cnt) == 0) {
		$('#product-cnt').val(0)
	} else {
		$('#product-cnt').val(Number(cnt) - 1)
	}
	
}