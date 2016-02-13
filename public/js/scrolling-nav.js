 /*
 *******************************************************************************
 * Source file name : scrolling-nav.js                                         *
 * Author's name : internet source                                             *
 * Last Modified by : Duc Minh Tran (300771859)                                *
 * Last Modified date : Feb 13, 2016                                           *
 * Website name: Michael Portfolio                                             *
 * File Description: scrolling animation                                       *
 *******************************************************************************
*/




//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
