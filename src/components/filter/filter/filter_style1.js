(function($) {

    /*
    * author: mihail-174
    * v1.0.0
    * github: https://github.com/mihail-174
    * ДЕЛАЕМ ЭЛЕМЕНТЫ В ФИЛЬТРЕ В ДВЕ КОЛОНКИ.
    * */
    window.changeFilterItemsColumn = function() {
        var filterRow = $(".fieldgroup");
        filterRow.removeClass("fieldgroup_column-1");
        filterRow.removeClass("fieldgroup_column-2");
        filterRow.each(function(){
            var rowWidth = $(this).width()/2;
            var arr = [];
            $(this).find(".form-checkboxes .form-item").each(function(){
                arr.push( $(this).width() );
            });
            // console.log(arr);
            arr.sort(function(a, b) {
                return b - a;
            });
            if ( arr[0] < rowWidth ) {
                $(this).addClass("fieldgroup_column-2");
            } else {
                $(this).addClass("fieldgroup_column-1");
            }
        });
    };

    if (typeof Drupal !== "undefined") {
        Drupal.behaviors.filter = {
            attach: function(context, settings) {
                init();
            }
        };
    } else {
        init();
    }

    function init() {

        $(document).ready(function () {
            changeFilterItemsColumn();

            $(".fieldgroup").each(function(){
                var idRow = $(this).attr("id");
                // console.log(localStorage.getItem( idRow ));
                if ( localStorage.getItem( idRow ) ) {
                    $("#" + idRow).find(".filter__more").addClass("active").find("span").text("свернуть");
                    $("#" + idRow).find(".filter__other").slideDown();
                }
            });
        });

        $(document).once().on("click", ".filter__more", function(){
            $(this).toggleClass("active");
            $(this).parent().find(".filter__other").slideToggle();
            if ( $(this).hasClass("active") ) {
                localStorage.setItem( $(this).parents(".fieldgroup").attr("id") , "open");
                $(this).find("span").text("свернуть");
            } else {
                $(this).find("span").text("показать все");
                localStorage.setItem( $(this).parents(".fieldgroup").attr("id") , "");
            }
        });

        $(document).on("click", ".edit-clear", function(){
            if ( $(".hidden-panel").hasClass("active") ) {
                $(".hidden-panel").removeClass("active");
                // $("body").pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
            }
        });
        $(document).on("click", ".edit-submit", function(){
            if ( $(".hidden-panel").hasClass("active") ) {
                $(".hidden-panel").removeClass("active");
                // $("body").pageScrollShow(); // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
            }
        });

    }

    $(document).ready(function () {
        $("#slider").slider({range: true, value: 1, step: 1000, min: 0, max: 5000000,
            slide: function(event, ui) {
                $("#start").val(ui.values[0]);
                $("#end").val(ui.values[1]);
            }});
        $("#start,#end").change(function() {
            $("#slider").slider("values", [parseInt($("#start").val()), parseInt($("#end").val())]);
        });
        if ( $(document).width() <= 1199 ) {
            move_m();
        } else {
            move_pc();
        }

        // changeFilterItemsColumn();

        $(window).resize(function(){
            // changeFilterItemsColumn();
            if ( $(document).width() <= 1199 ) {
                move_m();
            } else {
                move_pc();
            }
        });

        function move_m() {
            if ( !$(".hidden-panel-filter .hidden-panel__inner .filter").length ) {
                $(".filter").appendTo(".hidden-panel-filter .hidden-panel__inner");
                if ( !$(".filter-panel__ft .filter__action").length ) {
                    $(".filter-panel .filter__action").clone(true).appendTo(".filter-panel__ft");
                }
            }
        }
        function move_pc() {
            if ( !$(".catalog-filter__aside .filter").length ) {
                $(".hidden-panel").removeClass("active");
                $(".hidden-panel__inner .filter").appendTo(".catalog-filter__aside");
            }
        }

        // $(document).on("click", ".hidden-panel-filter .edit-clear", function(){
        //     $(".filter-panel__cont .edit-clear").click();
        // });
        // $(document).on("click", ".hidden-panel-filter .edit-submit", function(){
        //     $(".filter-panel__cont .edit-submit").click();
        // });

    });

})(jQuery);
