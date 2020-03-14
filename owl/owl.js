$(document).ready(function () {
	$('#customers').owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 4000,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	/* OWL CAROUSEL */
	$(".owl-prev").html('<i class="fas fa-chevron-left fa-2x"></i>');
	$(".owl-next").html('<i class="fas fa-chevron-right fa-2x"></i>');
});
