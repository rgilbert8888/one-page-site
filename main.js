
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

//attach to click event in the nav bar - outside of the window onscroll above
	$('.js-page-home').on('click', function(e){
		e.preventDefault();
		$.scrollTo('.page-home', 2000);

	});
	$('.js-page-about').on('click', function(e){
		e.preventDefault();
		
		$.scrollTo('.page-about', 2000);
		
	});

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
		}else if(w < 560 && nav.is(':visible')){
			nav.hide();
		}
	});

	$('.hamburger-menu').on('click', function(){
			$('nav ul').toggle();
		});

});







