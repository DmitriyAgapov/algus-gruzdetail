(function ($) {

    if (typeof Drupal !== "undefined") {
        Drupal.behaviors.custom_drupal_message = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }

    // -------------------------------------------

    function init() {

        // ЗАКРЫВАЕМ СООБЩЕНИЯ ДРУПАЛА
        $(".messages__close").on("click", function() {
            $(this).parents(".message-system").remove();
        });
        // КОНЕЦ

    }

    // -------------------------------------------

})(jQuery);