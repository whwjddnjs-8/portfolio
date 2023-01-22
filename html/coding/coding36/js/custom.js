$(function () {
	$('.btn-like').click(function () {
		$(this).toggleClass('active')
	})

	$('.options .colors span, .options .volume span').click(function () {
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
	})
})