const express		= require('express'),
	  router 		= express.Router({mergeParams: true}),
	  Campground	= require('../models/campground'),
	  Comments		= require('../models/comment'),
	  middleware	= require('../middleware');

// Comments new form
router.get('/new', middleware.isLoggedIn, function(req, res){
	Campground.findById(req.params.id, function(err, campground){
		if(err || !campground){
			req.flash('error', 'Campground doesnt exist.')
			console.log(err);
			res.redirect('/campgrounds')
		} else {
			res.render('comments/new', {campground: campground});		
		}
	})
});

// Comments create
router.post('/', middleware.isLoggedIn, function(req, res){
	req.body.comment.date = new Date().toLocaleDateString();
	Campground.findById(req.params.id, function(err, campground){
		if(err || !campground){
			req.flash('error', 'Campground doesnt exist.')
			res.redirect('/campgrounds');
		} else {
			Comments.create(req.body.comment, function(err, comment){
				if(err){
					req.flash('error', 'Something went wrong.');
					console.log(err);
				} else {
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					campground.comments.push(comment);
					campground.save();
					req.flash('success', 'Review was successfully added.')
					res.redirect('/campgrounds/'+req.params.id)
				}
			})
		}
	});
});


// EDIT
router.get('/:commentId/edit', middleware.checkCommentOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, campground){
		if(err || !campground){
			req.flash('error','Campground not found.');
			res.redirect('/campgrounds');
		} else {
			Comments.findById(req.params.commentId, function(err,foundComment){
				if(err || !foundComment){
					req.flash('error','Comment not found.');
					res.redirect('/campgrounds');
				} else {
					req.flash('success', 'Review was successfully edited.')
					res.render("comments/edit", {comment: foundComment, campground: campground});
				}
		});
		}
	})
});

// UPDATE
router.put('/:commentId', middleware.checkCommentOwnership, function(req, res){
	Comments.findByIdAndUpdate(req.params.commentId, req.body.comment, function(err, updatedComment){
		if(err){
			res.redirect('back');
		} else {
			res.redirect('/campgrounds/'+req.params.id);
		}
	})
});

// DESTROY
router.delete('/:commentId', middleware.checkCommentOwnership, function(req, res){
	Comments.findByIdAndRemove(req.params.commentId, function(err){
		if(err){
			res.redirect('back');
		} else {
			req.flash('success', 'Review deleted.');
			res.redirect('/campgrounds/'+req.params.id);
		}
	})
});


module.exports = router;