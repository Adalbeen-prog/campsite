// Gallery lightbox on click
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
});


// Load JSON api location
var newLocation;
$("#submit").prop("disabled",true)
$('#location').change(function() {
	var location = $(this).val();
	$.getJSON(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYWRhbGJlZW4iLCJhIjoiY2s3YWxqM3VwMDR6dDNmbnpjMDZ3Z3JoaCJ9.rYruLrnksOSl1pWstoww3w`, function (data) {
		$('p.error-message').remove();
		if(data.features[0]){
			$("#submit").prop("disabled",false)
			$('#location-hidden').val(JSON.stringify(data.features[0]));
			$('#location').after(`<p class="error-message">${data.features[0].place_name}</p>`);
		} else {
			$('#location').after('<p class="error-message">This location doesnt exist.</p>');
			$("#submit").prop("disabled",true)
		}
		
		
	});
});

resizeMap() 
$(window).resize(function() {
	resizeMap() 
});


function resizeMap() {
	if(screen.width < 768) {
		$("#map").appendTo("#mapPhone");
	} else {
		$("#map").appendTo("#mapDesktop");
	}
}
function checkStars(foundCampground){
	var totalStars = 0;
	foundCampground.comments.forEach(function(comment){
		totalStars += parseInt(comment.star);
	})
	totalStars = totalStars/foundCampground.comments.length;
	return totalStars;
}

