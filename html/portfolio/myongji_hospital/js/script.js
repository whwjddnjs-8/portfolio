$(function () {
    /* Sub Menu Dropdown */
    $('nav.menu-area').mouseover(function () {
       $('.sub-menu-area').stop().slideDown()
    }).mouseout(function () {
        $('.sub-menu-area').stop().slideUp()
    })

    /* Slide Area */
    var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loopFillGroupWithBlank: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        })

        function openTab(tabName) {
            var i, x;
            x = document.getElementsByClassName("news");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }

            document.getElementById(tabName).style.display = "block";
    }
    /* Fast Menu Slide Area */
    $('.slide_next').click(function () {
        var left = $(this).siblings('div').children().css('left')
        
        if (left == '0px') {
            $('.content_area').css({"left" : "-456px"})
        } else if (left == '-456px') {
             $('.content_area').css({"left" : "-912px"})
        } else if (left == '-912px') {
             $('.content_area').css({"left" : "0"})
        }
    })

    $('.slide_prev').click(function () {
        var left = $(this).siblings('div').children().css('left')
        
        if (left == '0px') {
            $('.content_area').css({"left" : "-912px"})
        } else if (left == '-456px') {
             $('.content_area').css({"left" : "0"})
        } else if (left == '-912px') {
             $('.content_area').css({"left" : "-456px"})
        }
    })

    /* Tab Area */
    $('.class_area').hide()
    $('.media_area').hide()
    $('.tab_area .btn_area ul li').click(function () {
        var idx = $(this).index();  

        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        
        
        if (idx == 0) {
            $('.news_area').show()
            $('.class_area').hide()
            $('.media_area').hide()
        } else if (idx == 1) {
            $('.news_area').hide()
            $('.class_area').show()
            $('.media_area').hide()
        } else if (idx == 2) {
            $('.news_area').hide()
            $('.class_area').hide()
            $('.media_area').show()
        }
    })

    /* Search Area */
    $('.search-icon-area img').click(function () {
        $('.search_area').fadeIn()
    })

    $('.close_btn_area').click(function () {
        $('.search_area').fadeOut()
    })
	
})