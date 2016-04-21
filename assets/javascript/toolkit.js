/**
 * Old Fashioned 0.0.0
 * Copyright 2015 Myles Braithwaite
 * MIT License
 * https://github.com/myles/old-fashioned/blob/master/LICENSE
 */

/* global $, SVGInjector */
/* jshint newcap:false */

'use strict';

$(document).ready(function() {
    var menuToggle = $('#js-mobile-menu'),
        navigationMenu = $('#js-navigation-menu');
    
    navigationMenu.removeClass("show");
    
    menuToggle.on('click', function(e) {
        e.preventDefault();
        
        navigationMenu.slideToggle(function() {
            if (navigationMenu.is(':hidden')) {
                navigationMenu.removeAttr('style');
            }
        });
    });
    
    // Inject SVG files.
    var svgsToInject = document.querySelectorAll('img.svg-injector');
    SVGInjector(svgsToInject);
});
