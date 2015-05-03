// one page

$(document).on('ready', function(){


	$(window).on('scroll', function(){

	//when scroll bar is 200 px from the top and nav wrap is NOT fixed...then set to fixed and slide it down



		if($(window).scrollTop() > 200 && $('.nav-wrapper').css('position') != "fixed"){
			$('.nav-wrapper').hide(function(){
				$('body').css('margin-top', '101px')
				$('.nav-wrapper').css('position', 'fixed'); 
				$('.nav-wrapper').slideDown(1000);
				// $('.page-home').animate({ 'margin-top': '0px'}, 10);
			});

			//else, set it back to the default (initial)
		} else if($(window).scrollTop() <= 200){
			$('body').css('margin-top', '0')
			$('.nav-wrapper').css('position', 'initial');

		} 
	});

//attach to click event in the nav bar - outside of the window onscroll above
	var originalHeight = $('.page-home').height();
	var newHeight = $('.page-home').height() - $('.nav-wrapper').height();
	$('.page-home').height(newHeight);

	$('.js-page-home').on('click', function(e){
		e.preventDefault();		
		$('.page-home').height(originalHeight);
		$.scrollTo('.page-home', 2000, {
			// offset: { 
			// 	top: $('.page-home').height();
			// },
			onAfter: function() {
				var w = $(window).width();
				// $('.page-home').height(newHeight + $('.nav-wrapper').height());
				if (w < 560) {
					$('nav ul').hide();
				}
			}


		});

	});

	// $('.js-page-about').on('click', function(e){
	// 	e.preventDefault();
		
	// 	$.scrollTo('.page-about', 2000,{
	// 		onAfter: function() {
	// 			var w = $(window).width();
	// 			if (w < 560) {
	// 				$('nav ul').hide();
	// 			}
	// 		}


	// 	});
		
	// });

	//remove offset for the "about" div ****//

	$('nav a').on('click',function(e){
		e.preventDefault();
		var target = $(this).data('target');
		$.scrollTo(target, 2000, {
			offset: { 
				top: -$('.nav-wrapper').height() 
			},
			onAfter: function() {
				var w = $(window).width();
				if (w < 560) {
					$('nav ul').hide();
				}
			}
		});
	});

	$(window).on('resize', function(){

		var w = $(window).width();
		var nav = $('nav ul');

		if(w > 560 && nav.is(':hidden')){
			nav.show();
		} else if(w < 560 && nav.is(':visible')){
			nav.hide();
			
		}
	});
//make sure this only happens in small screen!!***//
	$('.hamburger-menu').on('click', function(){
			var list = $('ul');
			var listItems = list.children('li');
			list.append(listItems.get().reverse());
			$('nav ul').toggle();
		});

	// $('.page-home').css('top', $('.nav-wrapper').height());


});