(function($) {

    $(document).ready(function(){
        var $centerHeadBar = $('.mobile-header__inner');
        var headerHeight = $centerHeadBar.height();
        var headerPosition = $centerHeadBar.offset().top;
        var headerInitialPosition = headerPosition;
        var lastPosition = 0;
        var scrollUp = false;
        $(window).scroll(function() {
            var position = $(window).scrollTop();

            if (lastPosition > position) {
                if (position <= headerInitialPosition) {
                    // САМОЕ НАЧАЛО СТРАНИЦЫ
                    $centerHeadBar.css( { position: 'static', transform: 'translateY(0)' } );
                } else {
                    if (!scrollUp) {
                        // В САМОМ НАЧАЛЕ СТРАНИЦЫ
                        $centerHeadBar.css( { position: 'absolute', transform: 'translateY(-100%)' } );
                    } else {
                        if (position <= headerPosition) {
                            // ВВЕРХ
                            $centerHeadBar.css( { position: 'fixed', transform: 'translateY(0)' } );
                        }
                    }
                }
                scrollUp = true;
            } else {
                scrollUp = false;
                headerPosition = $centerHeadBar.offset().top;
                // ВНИЗ
                $centerHeadBar.css( { position: 'fixed', transform: 'translateY(-100%)' } );
            }
            if ( position <= headerHeight ) {
                $centerHeadBar.css( { position: 'fixed', transform: 'translateY(0)' } );
            }
            lastPosition = position;
        });

    });


})(jQuery);
