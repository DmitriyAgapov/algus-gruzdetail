!function(a){a.fn.simpleFileInput=function(b){return a("html").addClass("sfi-js"),this.each(function(){function i(a){var b=a.indexOf("\\")>=0?a.lastIndexOf("\\"):a.lastIndexOf("/"),c=a.substring(b);return(0===c.indexOf("\\")||0===c.indexOf("/"))&&(c=c.substring(1)),c}function j(a){a.preventDefault(),e.trigger("click")}function k(b){var b=void 0===b?"":b,c=d.allowedExts,e=b.split(".").pop();return""==e||0==c?!0:-1!==a.inArray(e,c)?!0:!1}var c={placeholder:"Pick your file",wrapperClass:"sfi-container",validClass:"sfi-valid",errorClass:"sfi-error",disabledClass:"sfi-disabled",buttonText:"Pick your file",allowedExts:!1,width:300,onInit:function(){},onFileSelect:function(){},onError:function(){}},d=a.extend(c,b),e=a(this),f=a('<div class="sfi-wrapper '+d.wrapperClass+(e.is(":disabled")?" sfi-disabled":"")+'"></div>'),g=a('<span class="sfi-filename empty">'+d.placeholder+"</span>"),h=a('<a href="#" class="sfi-trigger">'+d.buttonText+"</a>");if(d.onInit(),!a(this).next(".sfi-wrapper").length){if(f.insertAfter(e),f.attr("tabindex",e.attr("tabindex")||"0"),0!=d.width&&f.css("width",d.width+"px"),g.appendTo(f),h.appendTo(f),e.hide(),e.is(":disabled"))return f.addClass(".sfi-disabled"),void 0;h.unbind("click").bind("click",function(a){j(a)}),g.unbind("click").bind("click",function(a){j(a)}),e.bind("change",function(){_val=a(this).val(),1==k(_val)?(g.text(i(_val)),d.onFileSelect(),f.removeClass(d.errorClass),f.addClass(d.validClass)):(d.onError(),e.val(""),f.removeClass(d.validClass),f.addClass(d.errorClass))})}})}}(jQuery);