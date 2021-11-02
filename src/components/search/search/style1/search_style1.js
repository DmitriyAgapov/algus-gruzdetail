(function($) {
    $(document).ready(function(){

        $('.search').each(function(){
            var thisSearch = $(this);
            var searchField = thisSearch.find('.form-text');
            thisSearch.on('mouseenter', function(){
                if ( searchField.val() !== '' ) {
                    thisSearch.addClass('search_focused');
                }
            });
            searchField.on('focus', function(){
                thisSearch.addClass('search_focused');
            });
            searchField.on('blur', function(){
                if ( searchField.val() === '' ) {
                    thisSearch.removeClass('search_focused');
                }
            });
        });

        $(document).click(function(event) {
            if ($(event.target).closest(".search").length) return;
            $('.search').removeClass('search_focused');
            event.stopPropagation();
        });

    });
})(jQuery);
