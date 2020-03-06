const express		= require('express'),
	  router 		= express.Router(),
	  Campground	= require('../models/campground'),
	  Comments		= require('../models/comment'),
	  middleware	= require('../middleware'),
	  myFunctions	= require('../public/js');


require('dotenv').config()

var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Show all campgrounds
router.get("/", function(req, res) {
	var perPage = 8;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
	Campground.find({}).populate("comments").skip((perPage * pageNumber) - perPage).limit(perPage).exec(function(err, foundCampgrounds){
		Campground.countDocuments().exec(function (err, count) {
			if(err || !foundCampgrounds){
				req.flash('error','Campgrounds not found.');
				res.redirect('/campgrounds');
			} else {
				foundCampgrounds.map(campground => campground.stars = myFunctions.checkStars(campground));
				res.render("campgrounds", {campgrounds: foundCampgrounds, current: pageNumber, pages: Math.ceil(count / perPage)});
			}
		});
	});	
});

router.get("/new", middleware.isLoggedIn, function(req, res) {
	res.render("campgrounds/new");
});

// EDIT CAMPGROUND
router.get('/:id/edit', middleware.checkCampgroundOwnership ,function(req, res){
	Campground.findById(req.params.id, function(err,foundCampground){
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});


// UPDATE
router.put('/:id',middleware.checkCampgroundOwnership,  function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			req.flash('error', err);
			res.redirect('/campgrounds/'+req.params.id);
		} else {
			res.redirect('/campgrounds/'+req.params.id);
		}
	})
});

// DELETE
router.delete('/:id',middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err, deletedCampground){
		if(err){
			res.redirect('/campgrounds/'+req.params.id);
		} else {
			deletedCampground.comments.forEach(function(commentId){
				Comments.findByIdAndRemove(commentId, function(err){
					if(err){
						req.flash('error', err);
					} else {
						console.log('Komentar '+commentId+' z kempu '+deletedCampground.name+' smazan')
					}
				});
			});
			res.redirect('/campgrounds')
		}
	})
});

router.get("/:id/gallery/new", middleware.checkCampgroundOwnership, function(req,res){
	Campground.findById(req.params.id, function(err, campground){
		res.render("campgrounds/gallery/new", {campground: campground})
	})
});

// SHOW - shows more info
router.get("/:id",function(req, res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err || !foundCampground){
			req.flash('error','Campground not found.');
			res.redirect('/campgrounds');
		} else {
			
			res.render("campgrounds/show", {campground: foundCampground, totalStars: myFunctions.checkStars(foundCampground)});
		}
	});	
});

router.post('/:id/gallery', middleware.isLoggedIn, upload.single('file'), function(req, res){
	cloudinary.uploader.upload(req.file.path, function(err, image) {
		if(err){
			req.flash('error', 'Something went wrong!')
			res.redirect('/campgrounds');
		} else {
			Campground.findById(req.params.id, function(err, result){
				req.flash('success', "You've successfully uploaded a picture into the gallery.")
				result.images.push(image.secure_url);
				result.save();
			});
			res.redirect('/campgrounds/'+req.params.id)
		}
	});
});

// Create campground
router.post("/",middleware.isLoggedIn, upload.single('image'), function(req, res){
	cloudinary.uploader.upload(req.file.path, function(err, result) {
		if(err){
			req.flash('error', 'Something went wrong!')
			res.redirect('/campgrounds');
		} else {
			req.body.campground.image = result.secure_url;
			var campground = req.body.campground;
			campground.author = {
				username: req.user.username,
				id: req.user._id
			};
		var locjson = JSON.parse(campground.location);
		campground.location ={
			lng: locjson.center[0],
			lat: locjson.center[1]
		}
		Campground.create(campground, function(err, campground){
			if(err){
				console.log(err);
			} else {
				res.redirect("/campgrounds/"+campground._id);
			}
		});	
		}
	});	
});

module.exports = router;