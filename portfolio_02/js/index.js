AOS.init()

$(document).ready(function () {

    const progressCircle = document.querySelector(".section_1 .autoplay-progress svg");
    const progressContent = document.querySelector(".section_1 .autoplay-progress span");
    var swiper = new Swiper(".mySwiper_1", {
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
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
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

    var swiper = new Swiper(".mySwiper_3", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },

            1200: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

            1500: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        }
    });

    var swiper = new Swiper(".mySwiper_5", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
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

    $(window).scroll(function () {
        var sct = $(window).scrollTop();

        if (sct > 1) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });

    $(window).resize(function () {
        var sct = $(window).scrollTop();
        if (sct > 1) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    })

});
