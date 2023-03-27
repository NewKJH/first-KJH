$(document).ready(function () {
    var windowWidth = window.innerWidth;

    var swiper1 = new Swiper(".mySwiper_1", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel: {
            invert: false,
        },
        direction: "vertical",
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },

    });
    swiper1.on('slideChange', function () {
        slideActiveEffect(swiper1.activeIndex);
    })

    $('.menu li').click(function () {
        var idx = $(this).index();
        swiper1.slideTo(idx);

        slideActiveEffect(idx);
        $('.menu li').removeClass('active');
        $(this).addClass('active');
    })

    function slideActiveEffect(index) {
        $('.menu li').removeClass('active');
        $('.menu li').eq(index).addClass('active');
    }


    navAction(windowWidth);

    $(window).resize(function () {
        windowWidth = window.innerWidth;
        navAction(windowWidth);
    })

    $('.nav_toggle_btn').click(navToggleBtn)


    function navAction(windowWidth) {
        if (windowWidth <= 768) {
            $('nav').removeClass('active');
            $('.nav_toggle_btn').addClass('active');
        } else {
            $('nav').addClass('active');
            $('.nav_toggle_btn').removeClass('active');
        }
    }

    function navToggleBtn() {
        if ($('nav').hasClass('active')) {
            $('nav').removeClass('active');
            $('.nav_toggle_btn').removeClass('navon');
        } else {
            $('nav').addClass('active');
            $('.nav_toggle_btn').addClass('navon');
        }
    }


    $(".que").click(function () {
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
    });


    var swiper2 = new Swiper(".mySwiper_2", {
        effect: "cards",
        grabCursor: true,
    });

})