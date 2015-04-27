
// one page

$(document).on('ready', function(){


	$(window).on('scroll', function(){
	//when scroll bar is 200 px from the top and nav wrap is NOT fixed...then set to fixed and slide it down
		if($(window).scrollTop() > 200 && $('.nav-wrapper').css('position') != "fixed"){
			$('.nav-wrapper').hide(function(){
				$('.nav-wrapper').css('position', 'fixed'); 
				$('.nav-wrapper').slideDown(1000);
			});

			//else, set it back to the default (initial)
		} else if($(window).scrollTop() <= 200){
			$('.nav-wrapper').css('position', 'initial');
		}
	});


	
	$('.hamburger-menu').on('click', function(){
		// $('.js-page-home img').toggleClass('mobile-logo');
		$('nav ul').toggle();

	});

	var hideMenu = function(){
		$('nav ul').hide();
	}
//scrollTo.min.js plugin - get from github and save in a separate file
//attach to click event in the nav bar - outside of the window onscroll above
	$('.js-page-home').on('click', function(e){
		e.preventDefault();
		$.scrollTo('.page-home', 2000);

	});
	$('.js-page-about').on('click', function(e){
		e.preventDefault();
		hideMenu();
		$.scrollTo('.page-about', 2000);
		
	});

	$('.js-page-products').on('click', function(e){
		e.preventDefault();
		hideMenu();
		$.scrollTo('.page-products', 2000, {offset: { top: -$('.nav-wrapper').height() }});
	});

	$('.js-page-news').on('click', function(e){
		e.preventDefault();
		hideMenu();
		$.scrollTo('.page-news', 2000, {offset: { top: -$('.nav-wrapper').height() }});
	});

	$('.js-page-contact').on('click', function(e){
		e.preventDefault();
		hideMenu();
		$.scrollTo('.page-contact', 2000, {offset: { top: -$('.nav-wrapper').height() }});
	});


	// breakpoint

	$(window).on('resize', function(){
		var w = $(window).width();
		// var ourNav = $('nav ul'); //can also save in variable to save time

		if(w < 420 && $('nav ul').is(':hidden')){
			$('nav ul').removeAttr('style');
		};

		// or 
		// if(w < 420 && ourNav.is(':hidden')){
		// 	ourNav.removeAttr('style');
		// }

	});




});