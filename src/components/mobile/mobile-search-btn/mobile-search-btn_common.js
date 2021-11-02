(function($) {
    $(document).ready(function(){

        $('.mobile-search-btn').on('click', function() {
            $(this).toggleClass('open');
            $('.mobile-panel-menu').removeClass('open');

            if ( $('.mobile-panel-search').hasClass('open') ) {
                $('.mobile-panel-search').removeClass('open');
                $('.mobile-panel__overlay').removeClass('active');
            } else {
                $('.mobile-panel__inner').scrollTop(0);
                $('.mobile-panel-search').addClass('open');
                $('.mobile-panel__overlay').addClass('active');
            }

            $('.mobile-panel-menu').removeClass('open');
            $('.mobile-panel__overlay').removeClass('active');
            $('.mobile-burger').removeClass('open');
        });

    });
})(jQuery);
