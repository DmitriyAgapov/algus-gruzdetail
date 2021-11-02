(function($) {
    if (typeof Drupal !== "undefined") {
        Drupal.behaviors.custom_theme_file = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }

    function init() {

        // $('.scrollbar-inner').scrollbar();

        // var simpleBar = new SimpleBar( $('.nd-shipment__body')[0], {
        //     forceVisible: 'y',
        //     scrollbarMinSize: 25
        // } );
        // simpleBar.unMount();
        // simpleBar.recalculate();

        // new SimpleBar($('.nd-shipment__body')[0]);

        // ДОБАВЛЯЕМ ОБЕРТКУ SPAN В ТАБЛИЦУ В ПЕРВУЮ ЯЧЕЙКУ
        $(".item-unit .item__body table tr").each(function () {
            $(this).find("td").wrapInner("<span></span>");
        });
        // КОНЕЦ

        // var bLazy = new Blazy({
        //     success: function(element){
        //         setTimeout(function(){
        //             var parent = element.parentNode;
        //             parent.className = parent.className.replace(/\bloading\b/,'');
        //         }, 200);
        //     }
        // });
        // $('.ui-dialog').ready(function(){
        //     var bLazy = new Blazy({
        //         success: function(element){
        //             setTimeout(function(){
        //                 var parent = element.parentNode;
        //                 parent.className = parent.className.replace(/\bloading\b/,'');
        //             }, 200);
        //         }
        //     });
        // });

    }

    $(document).ready(function(){

        // $(window).resize(function(){
        //     var bLazy = new Blazy({
        //         success: function(element){
        //             setTimeout(function(){
        //                 var parent = element.parentNode;
        //                 parent.className = parent.className.replace(/\bloading\b/,'');
        //             }, 200);
        //         }
        //     });
        // });

        $("table").each(function(){
            if ( !$(this).parents(".dev-modal").length && ( $(this).width() > $(this).parent().width() ) ) {
                var marginBottom = $(this).css("margin-bottom");
                $(this).wrap("<div class=\"table-wrapper\" style=\"margin-bottom: " + marginBottom + "\"></div>");
                $(this).css({"margin-bottom":"0"});
                if ( !$(this).hasClass("nostyle") ) {
                    $(this).addClass("table-no-hover");
                }
            }
        });
        if ( $(".table-wrapper").length ) {
            $(".table-wrapper").mCustomScrollbar({
                alwaysShowScrollbar: 0,
                axis: "x",
                scrollbarPosition: "outside"
            });
        }
        if ( $(".lightgallery").length ) {
            lightGallery(".lightgallery", "this");
            lightGallery(".photo_gallery","a");
        }
    });

})(jQuery);
