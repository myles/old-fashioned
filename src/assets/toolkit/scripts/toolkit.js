/**
 * Old Fashioned 0.0.0
 * Copyright 2015 Myles Braithwaite
 * MIT License
 * https://github.com/myles/old-fashioned/blob/master/LICENSE
 */

'use strict';

$(document).ready(function() {
	var menuToggle = document.getElementById('js-mobile-menu'),
		navigationMenu = document.getElementById('js-navigation-menu');
	
	navigationMenu.removeClass("show");
	
	menuToggle.on('click', function(e) {
		e.preventDefault();
		
		navigationMenu.slideToggle(function() {
			if (navigationMenu.is(':hidden')) {
				navigationMenu.removeAttr('style');
			}
		});
	});
});
