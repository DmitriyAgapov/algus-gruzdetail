(function($) {

    $(document).ready(function(){
        $(".block-banner").each(function () {
            var block = $(this);
            var mySwiper = new Swiper(this, {
                init: false,
                wrapperClass: "block__content",
                slideClass: "image",
                slidesPerView: 1,
                slidesPerGroup: 1,
                // setWrapperSize: true,
                spaceBetween: 0,
                loop: false,
                // longSwipes: false,
                // grabCursor: true,
                // // observer: true,
                // // observeParents: true,
                // // observeSlideChildren: true,
                // watchOverflow: true,
                // updateOnWindowResize: true,
                // freeMode: false,
                // freeModeMomentum: false,
                // allowTouchMove: false,
                // effect: "fade",

                // on: {
                //     init: function () {
                //         var delay = $(block).find(".block-banner__item.swiper-slide-active").data("delay") * 1000;
                //         mySwiper.params.autoplay.delay = delay;
                //     },
                //     slideChange: function () {
                //     },
                //     sliderMove: function () {},
                //     slideChangeTransitionStart: function () {
                //         var delay = $(block).find(".block-banner__item.swiper-slide-active").data("delay") * 1000;
                //         console.log(delay);
                //         mySwiper.params.autoplay.delay = delay;
                //         mySwiper.update();
                //     },
                //     slideChangeTransitionEnd: function () {},
                //     transitionEnd: function () {},
                // }
            });
            mySwiper.init();
        });
    });

})(jQuery);
