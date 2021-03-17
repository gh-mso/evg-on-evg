jQuery(document).ready(function($) {

	// Open social links in new window
	$('.person .social-icon a').attr('target', '_blank');
	
	// Set resource titles to equal heights
	function equalTitleHeights() {
		if( $(window).width() <= 800 ) {
			$('.resource-post .resource-title').height('');
			return;
		}
		
		var maxHeight = 0;
		var count = $('.resource-post .resource-title').length;

		$('.resource-post').each(function(i) {
			var $heading = $(this).children('a').children('h2');
			maxHeight = $heading.height() > maxHeight ? $heading.height() : maxHeight;
			if (!--count) $('.resource-post .resource-title').height(maxHeight);
		});
	}
	
	// Set resource titles to equal heights on page load and resize
	if( $('.resource-post').length !== 0 ) {
		equalTitleHeights();
		$( window ).resize(function() {
			equalTitleHeights();
		});
	}
	
	// Modify search box default text
	$('input.s').attr('placeholder', 'Search Blog');

	if ($('body').hasClass('page-id-4853')) {
		$('input.s').attr('placeholder', 'Search Resources');
		
	}
	
	// Video lightboxes
	if( $('.fancy-video').length !== 0 ) {
		$('.fancy-video').fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}
	
	// Clear subscribe placeholder text on focus
	$('#footer .gform_body input').on('focus', function() {
		if( $(this).val() == 'Email Address' ) $(this).val('');
	});
	$('#footer .gform_body input').on('blur', function() {
		if( $(this).val() == '' ) $(this).val('Email Address');
	});

	// // If on touch device toggle class on clients page items to mimic hover
	// if (Modernizr.touch) {
	// 	$('.client-gallery .gallery-item').on('click', function(e) {
	// 		e.preventDefault();
	// 		$(this).toggleClass('active');
	// 	});
		
	// }
	
	// Social link popup windows
	$(".share-popup").on("click", function(e) {
		e.preventDefault();
		windowPopup($(this).attr("href"), 500, 300);
	});

	function windowPopup(url, width, height) {
	  	// Calculate the position of the popup so
		// it’s centered on the screen.
	  	var left = (screen.width / 2) - (width / 2),
	    	top = (screen.height / 2) - (height / 2);

		window.open(
	    	url,
	    	"",
	    		"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
		);
	}
	
	
});

// Add Sticky header blog categories By Ntmatter

jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 170) {
        jQuery(".eg-blog-banner_tabs").addClass("stickyheaderblog");
    } else {
        jQuery(".eg-blog-banner_tabs").removeClass("stickyheaderblog");
    }
});

// Add Links Footer Titles Add By Ntmatter
jQuery(document).ready(function($) {

	var arr_learn_more = ['//www.evergage.com/why-evergage/', 'LEARN MORE'];
	var arr_products = ['//www.evergage.com/platform/', 'PLATFORM'];
	var arr_contact_us = ['//www.evergage.com/contact-us/', 'CONTACT US'];
	var arr_about = ['//www.evergage.com/about-us/', 'COMPANY'];

	if(php_vars.lang_code == 'de'){
		arr_learn_more = ['//www.evergage.com/de/warum-evergage/', 'MEHR ERFAHREN'];
		arr_products = ['//www.evergage.com/de/plattform/', 'PLATTFORM'];
		arr_contact_us = ['//evergage.com/contact-us/', 'KONTAKT'];
		arr_about = ['//www.evergage.com/de/ueber-uns/', 'UNTERNEHMEN'];
	}
	$('#nav_menu-6 h4').html('<a href="'+arr_learn_more[0]+'">'+arr_learn_more[1]+'</a>');
	$('#nav_menu-2 h4').html('<a href="'+arr_products[0]+'">'+arr_products[1]+'</a>');
	$('#nav_menu-4 h4').html('<a href="'+arr_contact_us[0]+'">'+arr_contact_us[1]+'</a>');
	$('#nav_menu-3 h4').html('<a href="'+arr_about[0]+'">'+arr_about[1]+'</a>');

});

// Stick Nav
jQuery(window).scroll(function() {

	if (jQuery(this).scrollTop() > 1){  

	    jQuery('.fusion-header-wrapper').addClass("sticky-ntm");

	}

	else {

	    jQuery('.fusion-header-wrapper').removeClass("sticky-ntm");
	}

});

// Add Class Slider
jQuery(document).ready(function() {

jQuery('.fusion-nav-prev').addClass("es-nav-prev");
jQuery('.fusion-nav-next').addClass("es-nav-next");

});
