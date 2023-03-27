AOS.init();

$(document).ready(function () {
    const progressCircle = document.querySelector(".section_1 .autoplay-progress svg");
    const progressContent = document.querySelector(".section_1 .autoplay-progress span");
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
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper_2 = new Swiper(".mySwiper_5", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,

        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },

            720: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 4,
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

    var swiper_3 = new Swiper(".mySwiper_6", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let windowWidth = $(window).width();

    if (windowWidth >= 1300) {
        // pc

        $('nav > ul > li').mouseenter(function () {
            $(this).addClass('active');
        })

        $('nav > ul > li').mouseleave(function () {
            $(this).removeClass('active');
        })
    } else {
        // mobile

        $('.hamburger').click(function () {
            $('nav').addClass('active');
        })

        $('nav .m_nav_close').click(function () {
            $('nav').removeClass('active');
        })

        $('nav > ul > li').click(function () {

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $('nav > ul > li').removeClass('active');
                $(this).addClass('active');
            }
        })
    }

    $(window).resize(function () {
        windowWidth = $(this).width();

        if (windowWidth >= 1000) {
            $('nav > ul > li').mouseenter(function () {
                $(this).addClass('active');
            })

            $('nav > ul > li').mouseleave(function () {
                $(this).removeClass('active');
            })
        } else {
            $('.hamburger').click(function () {
                $('nav').addClass('active');
            })

            $('nav .m_nav_close').click(function () {
                $('nav').removeClass('active');
            })
        }
    })


});