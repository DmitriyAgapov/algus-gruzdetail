(function($){

    // шаг 1, оформить заказ
    $('.cart .cart-btn__submit-checkout').on('click', function(){
        $('.cart .form-actions #edit-checkout').click();
    });

    // шаг 2, сделать заказ или завершить заказ
    $('.cart-btn_checkout-form .complete-order').on('click', function(){
        $('.checkout-form .form-actions input.form-submit').click();
    });

})(jQuery)
