(function($) {
    if (typeof Drupal !== "undefined") {
        Drupal.behaviors.custom_select_fx = {
            attach: function(context, settings) {
                initBehaviors();
            }
        };
    } else {
        init();
    }

    function init() {
        $("select.cs-select").each(function(i, el) {
            new SelectFx(el, {
                onChange: function( val ) {
                    $(el).change();
                    return false;
                }
            });
        });
    }

    function initBehaviors() {
        $("select.cs-select").once().each(function(i, el) {
            new SelectFx(el, {
                onChange: function( val ) {
                    $(el).change();
                    return false;
                }
            });
        });
    }

})(jQuery);
