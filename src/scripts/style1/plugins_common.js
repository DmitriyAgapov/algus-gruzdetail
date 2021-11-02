(function($) {
 
    /*
    * author: mihail-174
    * v1.0.0
    * github: https://github.com/mihail-174
    * Переход к якорю (плавно)
    *
    * USED:
    * $('class_блока').scrollingToElement();
    *
    * Параметры по умолчанию:
    * selector: 'a[href^="#"]'    — указываем selector, class, id
    * offsetTop: 0,               — отступ от края экрана
    * speed: 300                  — скорость анимации
    */
    $.fn.scrollingToElement = function(options) {
        var elem = this;
        options = $.extend({
            selector: 'a[href^="#"]',
            offsetTop: 0,
            speed: 300
        }, options);
        return this.each(function() {
            elem.find(options.selector).click(function() {
                var el = $(this).attr('href');
                $('body, html').animate({
                    scrollTop: $(el).offset().top - options.offsetTop
                }, options.speed);
                return false;
            });
        });
    }

    window.addEventListener('scroll', function() {
        document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px');
    });

    // БЛОЧИМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
    $.fn.pageScrollHide = function(options) {
        var scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        var body = document.body;
        body.style.position = 'fixed';
        body.style.top = '-' + scrollY;
        body.style.width = '100%';
        body.style.left = 0;
    }

    // РАЗРЕШАЕМ ПОЛОСУ ПРОКРУТКИ У СТРАНИЦЫ
    $.fn.pageScrollShow = function(options) {
        var body = document.body;
        var scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

})(jQuery);
