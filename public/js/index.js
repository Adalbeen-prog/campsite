var functionsObj = {};

functionsObj.checkStars = function(foundCampground){
	var totalStars = 0;
	foundCampground.comments.forEach(function(comment){
		totalStars += parseInt(comment.star);
	})
	totalStars = totalStars/foundCampground.comments.length;
	return totalStars;
}

module.exports = functionsObj;