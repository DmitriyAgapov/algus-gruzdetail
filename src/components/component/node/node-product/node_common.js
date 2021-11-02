(function($){
    $(document).ready(function(){

        $('.group-field-image').ready(function () {
            if ( $('.group-field-image .field-image-thumbnails .value').length > 1 ) {
                var galleryThumbs = new Swiper(".group-field-image .field-image-thumbnails", {
                    wrapperClass: "values",
                    slideClass: "value",
                    // slideActiveClass: 'card-image__item_active',
                    // slideVisibleClass: 'card-image__item_visible',
                    slidesPerView: 4,
                    // slidesPerGroup: 1,
                    spaceBetween: 8,
                    loop: false,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    // breakpoints: {
                    //     992: {
                    //         slidesPerView: 6
                    //     },
                    //     1200: {
                    //         slidesPerView: 8
                    //     }
                    // },
                });
                var galleryTop = new Swiper(".group-field-image .field-images", {
                    wrapperClass: "values",
                    slideClass: "value",
                    slideActiveClass: "active",
                    spaceBetween: 0,
                    loop: false,
                    setWrapperSize: true,
                    navigation: {
                        nextEl: ".group-field-image .arrows__next",
                        prevEl: ".group-field-image .arrows__prev",
                        disabledClass: "arrows__arrow_disabled",
                    },
                    thumbs: {
                        swiper: galleryThumbs,
                    },
                    pagination: {
                        el: ".group-field-image .dots",
                        clickable: true,
                        bulletClass: "dots__dot",
                        bulletActiveClass: "active",
                        dynamicBullets: true,
                        dynamicMainBullets: 1,
                    },
                    // autoplay: {
                    //     delay: 3000
                    // },
                    // on: {
                    //     init: function () {}
                    // },
                    // breakpoints: {
                    //     992: {
                    //         pagination: {
                    //             el: '.image__dots',
                    //             clickable: true,
                    //             bulletClass: 'dots__dot',
                    //             bulletActiveClass: 'active',
                    //             dynamicBullets: true,
                    //             dynamicMainBullets: 1,
                    //         },
                    //     }
                    // },
                });
                // $('.card-image__preview, .card-image__big, .st4 .arrows').on('mouseenter', function(e){
                //     galleryTop.autoplay.stop();
                // });
                // $('.card-image__preview, .card-image__big, .st4 .arrows').on('mouseleave', function(e){
                //     galleryTop.autoplay.start();
                // });
                // galleryTop.on("slideChange", function(e){});
                // galleryThumbs.on("slideChange", function(e){});
                $(".group-field-image .field-image-thumbnails .value").each(function(index) {
                    $(this).on("click", function(e){
                        $(".group-field-image .field-image-thumbnails .value").eq(index).find("a").click();
                    });
                });
                // $(".card-image__preview .arrows").css({"opacity":1, "visibility":"visible"});
            }

            // lightGallery(".field-images", "a");
            // $(".group-field-image .field-images").on("onBeforeOpen.lg",function(event){
            //     jQuery(".group-field-image .field-images .value").each(function(){
            //         jQuery(this).find("img").attr("src", jQuery(this).find("img").attr("data-src") );
            //     });
            // });




        });



    });
})(jQuery);
