(function($) {
    if (typeof Drupal !== 'undefined') {
        Drupal.behaviors.toBasket = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }



    function init() {
        $('.to-basket').each(function() {
            var qty = $(this);
            var input = qty.find('.form-item input.form-text');
            var formItem = input.parent();
            formItem.once().append('<span class="qty-up"></span><span class="qty-down disabled"></span>');
        });
        $('.qty-up').once().click(function () {
            var $input = $(this).parent().find('.form-text');
            $input.val(parseInt($input.val()) + 1);
            $(this).parent().find('.qty-down').removeClass('disabled');
            $input.change();
            return false;
        });
        $('.qty-down').once().click(function () {
            var $input = $(this).parent().find('.form-text');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count === 1) {
                $(this).addClass('disabled');
            }
            $input.val(count);
            $input.change();
            return false;
        });
        $('.to-basket-full').on('click', function () {
            $(this).find('.form-actions').hide();
        });
        // console.log($('.to-basket').width());
        // function iconWithText () {
        //     let btnBlock = $('.to-basket');
        //     if ( btnBlock.width() >= 240) {
        //         console.log('Больше');
        //         console.log($(this));
        //     } else {
        //         console.log('Меньше');
        //     }
        // }
        // iconWithText();

    }

})(jQuery);
