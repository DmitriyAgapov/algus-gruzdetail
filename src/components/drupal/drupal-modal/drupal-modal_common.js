(function ($) {
    $(document).ready(function(){
        // -------------------------------------------

        /*
        * ЛАЙФХАК, ЧТОБЫ МОДАЛКА НЕ БЫЛА МУТНОЙ В БРАУЗЕРЕ ХРОМ
        * при открытии модалки оборачиваем класс 'ui-dialog' в 'div.ui-dialog-wrapper'
        * для которого задаем через стили фиксированную позицию и выравнивание через 'display: flex'
        * при закрытии окна удаляем этот див
        */
        // 1 ВАРИАНТ
        // jQuery.extend(jQuery.ui.dialog.prototype.options, {
        //     open: function (event, ui) {
        //         $('.ui-dialog').once().wrap('<div class="ui-dialog-wrapper"></div>');
        //         // $('body').pageScrollHide(); // ЗАПРЕЩАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     },
        //     beforeClose: function( event, ui ) {
        //         $(this).dialog("destroy");
        //         $('.ui-dialog-wrapper').remove();
        //         // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     },
        //     close: function (event, ui) {
        //         // $('.ui-dialog-wrapper').remove();
        //         // $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     }
        // });

        // 2 ВАРИАНТ
        // $(document).on("dialogcreate", function( event, ui ) {
        //     console.log("dialogcreate");
        //     // console.log( event );
        //     $('.ui-dialog').once().wrap('<div class="ui-dialog-wrapper"></div>');
        // });
        // $(document).on("dialogbeforeclose", function( event, ui ) {
        //     console.log("dialogbeforeclose");
        //     $('.ui-dialog-wrapper').remove();
        //     $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        // });
        // $(document).on("dialogclose", function( event, ui ) {
        //     // console.log( event );
        //     console.log("dialogclose");
        //     $('.ui-dialog-wrapper').remove();
        //     $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        // });

        // 3 ВАРИАНТ
        // if ($('.ui-dialog:visible').length) {
        //     $('body').pageScrollHide(); // БЛОЧИМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //     if ( !$('.ui-dialog-wrapper').length ) {
        //         $('.ui-dialog').wrap('<div class="ui-dialog-wrapper"></div>');
        //     }
        // }
        // $(document).keydown(function(eventObject){
        //     if( eventObject.which == 27 ){
        //         if ($('.ui-dialog:visible').length) {
        //             $('.ui-dialog-wrapper').remove();
        //             $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        //         }
        //     };
        // });
        // jQuery('.ui-dialog-titlebar-close').on("click", function() {
        //     $('.ui-dialog-wrapper').remove();
        //     $('body').pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
        // });

        // 4 ВАРИАНТ
        $.widget( "ui.dialog", $.ui.dialog, {
            open: function() {
                // $('.ui-dialog-buttonpane').find('button.form-submit').removeClass(['button', 'button--primary', 'ui-button']).addClass('btn btn_primary btn_size-2');
                $(".ui-dialog").not(".feedback-call-form__ui-dialog").once().wrap("<div class=\"ui-dialog-wrapper\"></div>");
                return this._super();
            },
            close: function () {
                $(".ui-dialog-wrapper, .autodialog-content").remove();
            }
        });
        // КОНЕЦ

        // -------------------------------------------
    });
})(jQuery);