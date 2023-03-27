$(document).ready(function () {
    var swiper_1 = new Swiper(".mySwiper_1", {
        effect: "fade",
        centeredSlides: true,
        slidesPerView: "auto",

        fadeEffect: {
            rotate: 50,
            stretch: 50,
            depth: 150,
            modifier: 1,
            slideShadows: true,
        },

        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper_2 = new Swiper(".mySwiper_2", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            751: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    let windowWidth = $(window).width();

    if (windowWidth >= 1000) {

        $('nav').mouseenter(function () {
            $(this).addClass('active');
        })

        $('nav').mouseleave(function () {
            $(this).removeClass('active');
        })

        $('header').mouseenter(function () {
            $(this).addClass('active');
        })

        $('header').mouseleave(function () {
            $(this).removeClass('active');
        })


    } else {

        $('.hamburger').click(function () {
            $('nav').addClass('active');
        })

        $('.hamburger').click(function () {
            $('.hamburger').addClass('active');
        })

        $('.m_nav_close').click(function () {
            $('nav').removeClass('active')
            $('.hamburger').removeClass('active');
        })

        $('.depth2>a').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $('.depth2>a').removeClass('active');
                $(this).addClass('active');
            }
        })

        $('nav > ul > li').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $('nav > ul > li').removeClass('active');
                $(this).addClass('active');
            }
        })
    }

    $(window).resize(function () {
        windowWidth = $(this).width();

        if (windowWidth >= 1000) {
            $('nav').mouseenter(function () {
                $(this).addClass('active');
            })
            $('nav').mouseleave(function () {
                $(this).removeClass('active');
            })

            $('header').mouseenter(function () {
                $(this).addClass('active');
            })

            $('header').mouseleave(function () {
                $(this).removeClass('active');
            })
        }

        else {

            $('.hamburger').click(function () {
                $('nav').addClass('active');
            });

            $('.hamburger').click(function () {
                $('.hamburger').addClass('active');
            });

            $('.m_nav_close').click(function () {
                $('nav').removeClass('active');
                $('.hamburger').removeClass('active');
            });

            $('.depth2>a').click(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                } else {
                    $('.depth2>a').removeClass('active');
                    $(this).addClass('active');
                }
            })
        }
    });
})