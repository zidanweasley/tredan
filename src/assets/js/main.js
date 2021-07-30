jQuery(function ($) {
    'use strict';
   
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
		}
	});

	// Navbar JS
	$('.navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
	
	

	// Feedback Carousel
	var $imagesSlider = $(".testimonials-slides .client-feedback>div"),
	$thumbnailsSlider = $(".client-thumbnails>div");
	// Images Options
	$imagesSlider.slick({
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		fade: true,
		autoplay: true,
		draggable: true,
		asNavFor: ".client-thumbnails>div",
		prevArrow: '.client-feedback .prev-arrow',
		nextArrow: '.client-feedback .next-arrow'
	});
	

	

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));









