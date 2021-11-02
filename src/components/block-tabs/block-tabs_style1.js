(function ($) {
    $(document).ready(function () {
        var cont = $(".tabs-container");
        cont.find(function (){
            let allbtn = [];

            allbtn.push(cont.find(".btn"));
            // allbtn.forEach(value => value.removeClass("active"));
            cont.find(".tabs-container__links .btn").on('click', function (event) {
                event.preventDefault();
                cont.find(".tabs-container__links .btn").removeClass("active");
                cont.find(".tabs-container__tab-content").removeClass("active");
                $(this).addClass("active");
                cont.find($(this).attr("href")).addClass("active");

            });
        });
    });
})(jQuery);
