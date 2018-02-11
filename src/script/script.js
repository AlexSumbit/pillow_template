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
        let headerWidth = $(".js-header-container").css("width");
        if($(this).scrollTop() > 100){
            $(window).resize(function(){
                headerWidth = $(".js-header-container").css("width");
                $(".js-header").css("width", headerWidth);
            });
            $(".js-header").css("width", headerWidth);
            $(".js-header").css("padding-right", 30); // 30 = container left and right paddings
            $(".js-header").addClass("header--sticky");
        } else{
            $(".js-header").removeClass("header--sticky");
            $(".js-header").css("width", 'auto');
            $(".js-header").css("padding-right", "unset");
        }
    });

    $(".js-burger-closed").click(function(){
        $(".js-nav").addClass("opened");
    });

    $(".js-burger-opened").click(function(){
        $(".js-nav").removeClass("opened");
    });
});