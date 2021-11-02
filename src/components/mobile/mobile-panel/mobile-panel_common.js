(function ($) {
    $(document).ready(function(){

        $(".mobile-panel__overlay").on("click", function() {
            $(this).removeClass("active");
            $(".mobile-panel").removeClass("open");
            $(".mobile-burger").removeClass("open");
        });

        $(window).resize(function () {
            if ($("body").width() >= 992) {
                $(".mobile-panel").removeClass("open");
            }
        });

    });
})(jQuery);
