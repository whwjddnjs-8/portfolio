$(function () {
	$('.accordion .content').eq(0).show()
	$('.accordion .title').click(function () {
		/* siblings는 title, content 다있음 그중에 content만 다 slideup 시켜줌 */
		$(this).siblings('.accordion .title').removeClass('active')
		$(this).siblings('.accordion .content').slideUp()
		$(this).next().stop().slideToggle()
		$(this).addClass('active')
	})
})