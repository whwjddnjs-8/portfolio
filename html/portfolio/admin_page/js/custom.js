$(function () {
	/* Load Header */
	$('.header-area').load('../include/header.html', function () {
		/* Header GNB Slide Action */
		$('.header_wrapper .menu > li:first-child .sub-menu').show()
		$('.header_wrapper .menu > li').click(function () {
			$(this).siblings().children('.sub-menu').slideUp()
			$(this).children('.sub-menu').slideToggle()
		})

		$('.btn-menu').click(function () {
			$('header').css({ "left": '0px' })
			$('.header_wrapper').show()
			$(this).hide()
			$('.btn-close-menu').show()
		})

		$('.btn-close-menu').click(function () {
			$('header').css({ "left": '-232px' })
			$('.header_wrapper').hide()
			$(this).hide()
			$('.btn-menu').show()
		})
	})

	$('.my-info-area').load('../include/my-info.html', function () {
		/* Header Profile menu Open */
		$('.profile').click(function () {
		$(this).children('.profile-menu').slideToggle()
		})
	})

	/* Table Check All */
	$('#chk-all').click(function () {
		if ($("#chk-all").is(":checked")) {
			$("input[name=chk]").prop("checked", true);
		} else $("input[name=chk]").prop("checked", false);
	})

	$("input[name=chk]").click(function() {
		var total = $("input[name=chk]").length;
		var checked = $("input[name=chk]:checked").length;

		if(total != checked) $("#chk-all").prop("checked", false);
		else $("#chk-all").prop("checked", true); 
	});

	/* Summernote */
	$('#summernote').summernote({
		height: 300
	});
})