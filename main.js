$(document).ready(function(){
	$('.hero .slider').slick({
		autoplay: true, 
		autoplaySpeed: 2000, 
		dots: true,
});

$('.heromobile .slider').slick({
	slidesToShow: 1,
});

$('.videos .sliders').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	dots: true,
});


$('.videosmobile .sliders').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
});



  });
		  
