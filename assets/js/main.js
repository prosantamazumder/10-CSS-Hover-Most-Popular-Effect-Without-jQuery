(function($) {
    
  'use strict';

    /*====================================
        Scroll top js
    ======================================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#hoverta_scroll-up').fadeIn();
        } else {
            $('#hoverta_scroll-up').fadeOut();
        }
    });
    $('#hoverta_scroll-up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

})(window.jQuery);   
   