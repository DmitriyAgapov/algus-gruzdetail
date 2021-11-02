(function ($) {
    $(document).ready(function(){

        $(".mobile-burger").click( function() {

                $(this).toggleClass("open");

            if ( $("header").hasClass("open") ) {
                $("header").removeClass("open");
                $(".mobile-panel-menu-overlay").removeClass("active");
                // $(this).removeClass("open");
            } else {
                $(".mobile-panel-menu__inner").scrollTop(0);
                $("header").addClass("open");
                $(".mobile-panel-menu-overlay").addClass("active");
                // $(this).addClass("open");
            }

            // $('.search-m-panel').removeClass('open');
            // $('.search-m-panel-overlay').removeClass('active');
            // $('.mobile-search-btn').removeClass('open');
        });

    });
})(jQuery);
