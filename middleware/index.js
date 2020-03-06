const   Campground	= require('../models/campground'),
	  	Comments	= require('../models/comment');

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, function(err,foundCampground){
			if(err || !foundCampground){
				req.flash('error', 'Campground not found.');
				res.redirect('/campgrounds');
			} else {
				if(foundCampground.author.id.equals(req.user._id) ){
					next();
				} else {
					req.flash('error', 'You dont have permission to do that.');
					res.redirect('/campgrounds');
				}
			}
		});
	} else {
		req.flash('error', 'You need to be logged in to do that.')
		res.redirect('/login');
	}
}

middlewareObj.checkCommentOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Comments.findById(req.params.commentId, function(err,foundComment){
			if(err || !foundComment){
				res.redirect('back');
			} else {
				if(foundComment.author.id.equals(req.user._id) ){
					next();
				} else {
					req.flash('error', 'You dont have permission to do that.');
					res.redirect('back');
				}
			}
		});
	} else {
		req.flash('You need to be logged in to do that.');
		res.redirect('back');
	}
}

middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash('error', 'You need to be logged in to do that.');
	res.redirect('/login');
}

middlewareObj.alreadyLoggedIn =  function(req, res, next){
	if(req.isAuthenticated()){
		res.redirect('back');
	} else {
		next();
	}
}



module.exports = middlewareObj;