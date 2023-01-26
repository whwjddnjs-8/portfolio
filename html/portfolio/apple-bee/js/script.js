$(function () {
	/* Main Slick Slider */
	$('.main-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 3000,
	});

	/* 카테고리 전체보기 */
	$('.btn-all-category,.m-btn-all-category').click(function () {
		$(this).toggleClass('active')
		$('.category-all').stop().slideToggle()
	})

	/* 모바일 환경 메뉴 버튼 클릭 */
	$('.mobile-menu').click(function () {
		$('.mobile-right-menu').fadeIn()
	})
	$('.btn-close-right-menu').click(function () {
		$('.mobile-right-menu').fadeOut()
	})
})