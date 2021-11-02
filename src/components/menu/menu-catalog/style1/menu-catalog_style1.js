(function($) {



    $.fn.liColl = function(options){
        // настройки по умолчанию
        var o = jQuery.extend({
            n_coll: 2, //колличество колонок
            c_unit: "%", //Единица измерения
            c_width: 300, //Ширина колонок
            p_left: 5 //отступ слева %
        },options);
        var updateColl = function update(listWrap){
            listWrap.children(".coll_s").each(function(){
                $(this).children().unwrap();
            });
            listWrap.liColl(options);
        };
        return this.each(function(){
            element = $(this).css({overflow:"hidden"});
            nc = o.n_coll;
            pl = o.p_left;
            i = 1;
            c_un = "px";
            if(options.c_unit != c_un){
                coll_w = Math.floor(100/nc);
                coll_w = coll_w - pl;
            } else {
                coll_w = options.c_width - pl;
            }
            num_1 = element.children("li").length;
            create();
            function create(){
                n_end = Math.ceil(num_1/nc);
                var cc = jQuery("<div />").addClass("coll_s c_" + i).css({width:coll_w+options.c_unit,paddingLeft:pl+options.c_unit,float:"left",clear:"right"});
                //element_2.append();
                element.children("li").slice(0,n_end).wrapAll(cc);
                if(num_1 != n_end){
                    i++;
                    nc--;
                    num_1 = num_1 - n_end;
                    create();
                }
            }
        });
    };

    $(document).ready(function(){


        // $(".menu-catalog > li:first-child > a ~ .menu-level-1").on({
        //     mouseenter: function() {
        //         $( this ).parentsUntil(".bottom").addClass("contents");
        //
        //     },
        //     mouseleave: function() {
        //         $( this ).parentsUntil(".bottom").removeClass("contents");
        //     }
        // });
        $(".menu-catalog-wrapper").on({
            mouseenter: function() {
                $( this ).parentsUntil(".bottom").addClass("contents");
                $(this).removeClass("collapsed ");
                $(this).addClass("expanded");
                $(this).children(".menu").addClass("active");
            },
            mouseleave: function() {
                $( this ).parentsUntil(".bottom").removeClass("contents");
                $(this).removeClass("expanded ");
                $(this).addClass("collapsed");
                $(this).children(".menu").removeClass("active");
            }
        });
        // $(".menu-catalog > li:first-child >  .menu").on({
        //     mouseenter: function() {
        //         $( this ).parentsUntil(".bottom").addClass("contents");
        //         $(this).next().addClass("active");
        //     },
        //     mouseleave: function() {
        //         $( this ).parentsUntil(".bottom").removeClass("contents");
        //         let el = $(this);
        //         el.next().removeClass("active");
        //     }
        // });

        // do { $(".menu-catalog > li:first-child >  .menu").parentsUntil(".bottom").addClass("contents")
        // } while ($(".menu-catalog > li:first-child >  .menu").hasClass('active') );
        //
        //
        //


        $(".menu-main .menu__item-31 .submenu__list").liColl({
            c_unit: "px", // '%' или 'px' При указании '%' — ширина 'c_width' игнорируется
            n_coll: 2, //колличество колонок
            // c_width: 120, //Ширина колонок в 'px'
            p_left: 0 //отступ слева %
        });

    });
})(jQuery);
