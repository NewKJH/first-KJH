$(document).ready(function () {

    let windowWidth = $(window).width();

    if (windowWidth >= 1000) {
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

})