$(document).ready(function(){
	$('.gallery').slick({
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		centerpadding: "40px",
		autoplay:true,
		autoplaySpeed: 2000,
		speed:800,
		slidesToScroll: 1,
		dots: true,
	});
});