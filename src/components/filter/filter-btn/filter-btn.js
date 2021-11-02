(function ($) {
    $(document).ready(function () {

        $(".filter-btn a").on("click", function () {
            $(".hidden-panel-filter").addClass("open");
            $(".hidden-panel__inner").scrollTop(0);
        });

    });
})(jQuery);
