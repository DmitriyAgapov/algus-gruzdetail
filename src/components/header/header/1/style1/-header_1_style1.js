(function ($) {
    $(document).ready(function () {

        $("body").off("click");
        $("body").on("click", ".header_layout-1 .header__call-us > a",  function () {
            var headerwf = $(".header__wf");
            if (headerwf.css("display") === "none") {
                headerwf.show();
            } else {
                headerwf.hide();
            }
        });

    });

    $(document).click(function (event) {
        if ($(event.target).closest(".header__wf, .header__call-us > a").length) return;
        $(".header__wf").hide();
        event.stopPropagation();
    });

})(jQuery);
