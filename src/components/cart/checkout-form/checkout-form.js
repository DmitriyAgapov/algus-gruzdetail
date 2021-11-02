(function ($) {

    /*
    * делаем проверку на 'drupal'
    * если ='underfined' то выполняем функцию init() после выполнения ajax
    * если !='underfined' то просто выполняем функцию init() при загрузке страницы
    * свой код пишем внутри init()
    */
    if (typeof Drupal !== 'undefined') {
        Drupal.behaviors.checkoutForm = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }
    function init() {

        $('.checkout-form__form').placeholder_wf({
            field: 'form-item'
        });

        $('input[name="payment_information[billing_information][field_phone][0][value]"]').once().inputmask({
            alias: "+7##########",
            "placeholder": "_",
            clearMaskOnLostFocus: true,
            showMaskOnHover: false,
            showMaskOnFocus: true
        });

        $('input[name="contact_information[email]"]').once().inputmask({
            alias: "email",
            "placeholder": "_",
            clearMaskOnLostFocus: true,
            showMaskOnHover: false,
            showMaskOnFocus: true
        });

        $('.field--name-field-file .form-file').simpleFileInput({
            // buttonText: 'Загрузите фотографии',
            placeholder: 'Прикрепить реквизиты'
        });

    }

})(jQuery);
