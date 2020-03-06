const mongoose = require('mongoose');

//SCHEMA
const campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	info: String,
	description: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
	price: {
		value: String,
		currency: String
	},
	images: [],
	location: {
		lng: Number,
		lat: Number
	}
});


module.exports = mongoose.model("Campground", campgroundSchema);