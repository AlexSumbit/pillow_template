$(document).ready(function(){
    $(".js-slider-top").slick({
        autoplay: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        zIndex: -1
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            let headerWidth = $(".js-header").css("width");
            $(".js-header").css("width", headerWidth);
            $(".js-header").addClass("header--sticky");
        } else{
            $(".js-header").removeClass("header--sticky");
        }
    });
});