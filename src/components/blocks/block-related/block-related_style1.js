(function($){
    $(document).ready(function(){

            var mySwiper = new Swiper(".block-related .block__slider", {
                init: false,
                wrapperClass: "block__slider-wrapper",
                slideClass: "teaser",
                slidesPerView: 6,
                slidesPerGroup: 6,
                setWrapperSize: true,
                spaceBetween: 24,
                loop: false,
                // longSwipes: false,
                grabCursor: true,
                observer: true,
                observeParents: true,
                // observeSlideChildren: true,
                // watchOverflow: true,
                updateOnWindowResize: true,
                freeMode: true,
                freeModeMomentum: false,
                // allowTouchMove: false,
                // effect: "fade",
                navigation: {
                    nextEl: '.block-related .arrows__next',
                    prevEl: '.block-related .arrows__prev',
                },

            });
            mySwiper.init();

    });
})(jQuery);
