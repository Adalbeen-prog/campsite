const express 			= require('express'),
	  router  			= express.Router(),
	  passport 			= require('passport'),
	  User				= require('../models/user'),
	  middleware	= require('../middleware');

// index page
router.get("/", function(req, res){
	res.render("landing");
});

//SIGN UP

// SHOW REGISTER
router.get('/register', middleware.alreadyLoggedIn,function(req, res){
	res.render('register');
});

// POST REGISTER
router.post('/register', middleware.alreadyLoggedIn, function(req, res){
	const newUser = new User({username: req.body.username.trim()})
	User.register(newUser, req.body.password.trim(), function(err, user){
		if(err){
			req.flash('error', err.message);
			return res.redirect('/register');
		} else {
			passport.authenticate('local')(req, res, function(){
				req.flash('success', 'Welcome to the CampSite, '+user.username+'!');
				res.redirect('/campgrounds');
			})
		}
	})
});

//LOGIN

// Show login form
router.get('/login', middleware.alreadyLoggedIn, function(req, res){
	req.flash('error')
	res.render('login');
});

// POST login
router.post('/login', middleware.alreadyLoggedIn, passport.authenticate('local', 
	{
		successRedirect: '/campgrounds',
		failureRedirect: '/login',
		failureFlash : true
	}),function(req, res){
});

// LOGOUT
router.get('/logout', function(req, res){
	req.logout();
	req.flash('error', 'Logged you out!')
	res.redirect('/campgrounds');
})


module.exports = router;