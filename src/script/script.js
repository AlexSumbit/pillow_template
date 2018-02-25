(function slidersControll(){
    $(".js-slider-top").slick({
        autoplay: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        zIndex: -1
    });
})();


(function menuControll(){
    let headerWidth = 0;
    let padding = 30; //container left + right paddings

    $(window).scroll(function(){
        updateHeader();
    });

    $(window).resize(function(){
        updateHeader();
    });

    function updateHeader(){
        headerWidth = $(".js-header-container").css("width");
        if($(this).scrollTop() > 100){
            $(".js-header").css("width", headerWidth);
            $(".js-header").css("padding-right", padding);
            $(".js-header").addClass("header--sticky");
        } else{
            $(".js-header").removeClass("header--sticky");
            $(".js-header").css("width", 'auto');
            $(".js-header").css("padding-right", "unset");
        }
    }

    $(".js-burger-closed").click(function(){
        $(".js-nav").addClass("opened");
    });

    $(".js-burger-opened").click(function(){
        $(".js-nav").removeClass("opened");
    });

    $(".js-nav .nav__item").click(function(){
        $(".js-nav").removeClass("opened");
    });

})();