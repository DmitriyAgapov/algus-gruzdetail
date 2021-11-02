(function ($) {
    $(document).ready(function() {
        // -------------------------------------------

        /*
            * ПАНЕЛЬ СИСТЕМНЫХ ВКЛАДОК
            * ВЫЗОВ ФУНКЦИИ 'systemTabs()'
        */
        $.fn.systemTabs = function(options) {
            var tabs = this;
            return this.each(function() {
                tabs.ready(function(){
                    // console.clear();

                    // -------------------------------------------------------------

                    var ul = tabs.find("ul");
                    var li = ul.find("li");

                    if ( !$(".system-tabs__expanded").length ) {
                        ul.after("<div class=\"system-tabs__expanded\"><div class=\"system-tabs__burger\"><span></span></div><div class=\"system-tabs__mn\"></div></div>");
                        $(".system-tabs__mn").append( li.clone() );
                        $(".system-tabs__mn li").each(function() {
                            $(this).removeClass("system-tabs__item").addClass("hidden");
                        });
                    }

                    var width_div_tabs = tabs.outerWidth();
                    // console.log( 'ширина области табов = ' + width_div_tabs );
                    // console.log( 'количество табов = ' + ul.find('li').not('.hidden').length + ' шт.' );

                    var width_ul = 0;
                    li.each(function(){
                        width_ul = width_ul + $(this).outerWidth();
                    });
                    // console.log('ширина всех табов = ' + width_ul);

                    var width_burger = $(".system-tabs__burger").width();
                    // console.log('ширина бургера = ' + width_burger);

                    if ( width_ul > width_div_tabs ) {

                        // console.group('LI');
                        var new_width_ul = 0;
                        li.each(function(index) {
                            var this_li = $(this);
                            new_width_ul = new_width_ul + this_li.outerWidth();
                            // console.log(new_width_ul);
                            var li_right = this_li.position().left + this_li.outerWidth() + width_burger;
                            // console.log( this_li.position().left + ' | ' + this_li.outerWidth() );

                            if ( li_right > width_div_tabs ) {
                                // console.log(index + ': ' + li_right + ' : ' + this_li.text() + ' : ' + 'не входит');
                                this_li.addClass("hidden");
                                $(".system-tabs__mn li").eq(index).removeClass("hidden");
                            } else {
                                // console.log(index + ': ' + li_right + ' : ' + this_li.text() );
                            }

                        });
                        // console.groupEnd();

                        // console.group('ВИДИМЫЕ LI');
                        var ulWidthVisible = 0;
                        ul.find("li").not(".hidden").each(function(){
                            ulWidthVisible = ulWidthVisible + $(this).outerWidth();
                        });
                        // console.log('ширина видимых табов = ' + ulWidthVisible);
                        // console.groupEnd();

                        // console.group('ШИРИНА СВОБОДНОГО МЕСТА');
                        var widthFree = width_div_tabs - ulWidthVisible - width_burger;
                        // var widthFree = width_div_tabs - (ulWidthVisible - width_burger);
                        // console.log( width_div_tabs + ' - ' + ulWidthVisible + ' - ' + width_burger + ' = ' + widthFree + ' px' );
                        // console.log( width_div_tabs + ' - ' + (ulWidthVisible - width_burger)  + ' = ' + (widthFree-width_burger) + ' px' );
                        // console.groupEnd();

                        // console.group('ШИРИНА ПЕРВОГО СКРЫТОГО ПУНКТА');
                        var widthFirstHiddenItem = ul.find("li.hidden").first().width();
                        // console.log( widthFirstHiddenItem );
                        // console.log( widthFirstHiddenItem + width_burger );
                        // console.groupEnd();

                        if ( widthFree > widthFirstHiddenItem ) {
                            $(".system-tabs__mn li").eq( ul.find("li.hidden").first().index() ).addClass("hidden");
                            ul.find("li.hidden").first().removeClass("hidden");
                        }

                    } else {
                        $(".system-tabs__expanded").remove();
                        li.removeClass("hidden");
                    }

                    // -------------------------------------------------------------

                });
            });
        };

        $(".system-tabs").systemTabs();
        $(window).resize(function(){
            $(".system-tabs").systemTabs();
        });
        // КОНЕЦ

        // -------------------------------------------
    });
})(jQuery);