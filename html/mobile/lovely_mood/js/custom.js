$(function () {
	/* Load Include Html */
	$('.gnb-area').load('../include/gnb.html')
	$('.main-header-area').load('../include/main-header.html')

	/* Home Main Banner Slider */
	$('.home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 3000,
	})

	/* Home Advertisement Hide */
	$('.btn-close-advertise, .advertise-dark-background').click(function () {
		$('.advertise-dark-background').hide()
		$('.advertise-inner').slideUp()
	})

	/* Home Best Product Slider */
	$('.front-best-new-product .product-items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			infinite : false
	})

	/* Product Detail Slider */
	$('.product-detail-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			infinite : false
	})

	/* Product Detail 하단 Review & QNA */
	$('.slide-title').click(function () {
		$(this).next('.slide-content').slideToggle()
		$(this).children().toggleClass('active')
	})
	/* Search Recent View Product Slider */
	$('.recent-view .recent-view-items').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite : false
	})

	/* Product Like 좋아요 버튼 toggle */
	$('.product-like').click(function () {
		$(this).toggleClass('active')
	})

	/* Cart delete 버튼 */
	$('.add-cart .cart-delete-all').click(function () {
		$('.cart-items').hide()
	})

	$('.cart-items .item .btn-close').click(function () {
		$(this).parent().parent().hide()
	})

	
})

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