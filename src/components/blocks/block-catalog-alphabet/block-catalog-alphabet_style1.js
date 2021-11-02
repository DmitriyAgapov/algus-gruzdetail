(function ($) {
    $(document).ready(function () {
        var card = document.querySelectorAll(".teaser-term-product-teaser-4");
        for (var i = 0; i < card.length; i++) {
            let item =  $(card[i]).find(".field-list li");

            let countItem = item.length;
            let link =  $(card[i]).find(".field-list .more__link");
            link.hide();
            if (countItem > 2) {
                item.slice(5, item.length).wrapAll("<li class=\"more__wrapper\" style=\"display: none;\"><ul></ul></li>");
                $(".more__wrapper").once().after('<li class="more__link collapsed"><span>Еще</span></li>');
            }
        }

        $(document).on('click', ".more__link", function () {
            if ( $(this).hasClass("collapsed") ) {
                $(this).prev().show();
                $(this).find("span").text("Свернуть");
                $(this).removeClass("collapsed");

            } else {
                $(this).prev().hide();
                $(this).find("span").text("Еще");
                $(this).addClass("collapsed");
            }
        })
    });
})(jQuery);
