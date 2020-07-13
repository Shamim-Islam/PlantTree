// Navigation toggler btn //

$(document).ready(function () {
    'use strict';

    $('.nav-button').click(function () {
        'use strict';

        $('.nav-button').toggleClass('change');

    });

});

// highlight active menu on click //

$(document).ready(function () {
    'use strict';

    $('.navbar-nav li a').click(function () {
        'use strict';

        $('.navbar-nav li a').parent().removeClass('active');
        $(this).parent().addClass('active');

    });

});

// highlight active menu on scroll //

$(document).ready(function () {
   'use strict';
    
    $(window).scroll(function () {
       'use strict';
        
        $('section, header').each(function () {
           'use strict';
            
            var bb = $(this).attr('id'); // its define the id of each section
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                
                $('.navbar-nav li a[href="#' + bb + '"]').parent().addClass('active');
                
            } else {
                
                $('.navbar-nav li a[href="#' + bb + '"]').parent().removeClass('active');
            }
            
        });
        
    });
    
});


// Smooth Scrolling //

$(document).ready(function () {
    'use strict';

    $('.nav-link, .navbar-brand, .btn-cstm, .arw-dwn, .footer-link').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

/*----------- Add counter up --------------*/

$(document).ready(function () {
    'use strict';

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

/*----------- Add animations & initialize wow --------------*/

$(document).ready(function () {

    'use strict';
    new WOW().init();

});