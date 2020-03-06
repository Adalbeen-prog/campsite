const express			= require("express"),
	  app 				= express(),
	  bodyParser 		= require("body-parser"),
	  mongoose 			= require("mongoose"),
	  User 				= require('./models/user'),
	  seedDB 			= require('./seeds'),
	  passport 			= require('passport'),
	  LocalStrategy		= require('passport-local'),
	  methodOverride	= require('method-override'),
	  flash				= require('connect-flash');


const dotenv = require('dotenv');
dotenv.config();

// Import all routes
const commentRoutes 	= require('./routes/comments'),
	  campgroundRoutes  = require('./routes/campgrounds'),
	  authRoutes 		= require('./routes/auth');


// delete all DB and seed 4 new campgrounds with 1 sample comment
seedDB();


mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0-shmga.azure.mongodb.net/test?retryWrites=true&w=majority`, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useFindAndModify: false 
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash()); // Flash messages

// PASSPORT CONFIGURATION
app.use(require('express-session')({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	return next();
});

app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(authRoutes);

app.get("*", function(req, res){
	res.redirect('/campgrounds')
})

app.listen(process.env.PORT, process.env.IP, () => {
	console.log("Listening on port 3000");
});