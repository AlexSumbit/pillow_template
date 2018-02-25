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

    $('.js-slider-portfolio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 0,
        arrows: false,
        asNavFor: '.js-slider-portfolio-nav',
        zIndex: 0
    });

    $('.js-slider-portfolio-nav').slick({
        autoplay: false,
        centerMode: true,
        slidesToShow: 5,
        focusOnSelect: true,
        asNavFor: '.js-slider-portfolio',
        arrows: false
    });
})();

(function menuControll(){
    let headerWidth = 0;
    let padding = 30; //container left and right paddings

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
})();
