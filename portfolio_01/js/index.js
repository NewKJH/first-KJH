// $(document).ready(function(){

//     var swiper = new Swiper(".mySwiper", {
//         pagination: {
//           el: ".swiper-pagination",
//           type: "fraction",
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });

// })\

$(document).ready(function(){

    var ww = $(window).width();

    function layout(){

        $('#section_1').css({
            width: ww,
            height: ww * 0.485
        });
        
        wrap_w = $('#section_1').width();
        wrap_h = $('#section_1').height();

        $('.img_wrap').css({
            width: wrap_w * 3,
            height: wrap_h
        });

        $('.img_container_1').css({
            width: wrap_w,
            height: wrap_h
        });

        $('.img_container_2').css({
            width: wrap_w,
            height: wrap_h
        });

        $('.img_container_3').css({
            width: wrap_w,
            height: wrap_h
        });

        $('.img_container_1 img').css({
            width: wrap_w,
            height: wrap_h
        });

        $('.img_container_2 img').css({
            width: wrap_w,
            height: wrap_h
        });

        $('.img_container_3 img').css({
            width: wrap_w,
            height: wrap_h
        });

        $('.arrow').css({
            // width: ww*0.1,
            // height: ww*0.1,
            fontSize: 2.5+'em',
            // backgroundColor: 'lightblue',
            lineHeight: ww*0.1+'px',
            marginTop: -(ww * 0.1)/2
        });
    }
    layout();
                
    //리사이즈
    $(window).resize(function(){
        ww = $(window).width();
        layout();
    });

    var i = 0;
                
    $('#right').click(function(){
        i++;
        if( i > 2 ){
            i = 0;
        }
        $('.img_wrap').animate({
            left: -wrap_w * i 
        });
    });

    $('#left').click(function(){
        i--;
        if( i < 0 ){
            i = 2;
        }
        $('.img_wrap').animate({
            left: -wrap_w * i 
        });
    });



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation : { 
            nextEl : '.swiper-button-next', 
            prevEl : '.swiper-button-prev', 
        },
      });

});