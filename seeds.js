const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comments = require('./models/comment')


data = [
	{
		name: "Clouds Rest",
		image: "https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
		info: "This is a text that will be shown under the image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.",
		author: {
			username: 'Homer "Boomer"',
			id: '5e578f25d93f530c71607e88'
		},
		price: {
			value: '150',
			currency: 'CZK'
		},
		images: ['https://images.unsplash.com/photo-1528892677828-8862216f3665?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'],
		location: {
			lng: 14.10,
			lat: 50.14
		}
	},
	{
		name: "Desert Rest",
		image: "https://cdn.pixabay.com/photo/2020/02/04/10/42/camping-4817872_960_720.jpg",
		info: "This is a text that will be shown under the image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.",
		author: {
			username: 'Homer "Boomer"',
			id: '5e578f25d93f530c71607e88'
		},
		price: {
			value: '15',
			currency: 'USD'
		},
		location: {
			lng: 16.6,
			lat: 49.16
		}
	},
	{
		name: "Winter Rest",
		image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_960_720.jpg",
		info: "This is a text that will be shown under the image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.",
		author: {
			username: 'Homer "Boomer"',
			id: '5e578f25d93f530c71607e88'
		},
		price: {
			value: '9',
			currency: 'EUR'
		},
		location: {
			lng: 13.3,
			lat: 49.7
		}
	},
	{
		name: "Autumn Rest",
		image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg",
		info: "This is a text that will be shown under the image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat egestas nunc id commodo. Quisque gravida consectetur nulla id accumsan. Fusce tortor tellus, rutrum at eleifend eu, tristique et tortor. Aliquam ultricies luctus nibh, sit amet dapibus turpis facilisis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius arcu at nunc tempus, eu efficitur turpis placerat. Cras at elit vel tellus faucibus porttitor eget congue velit. Aenean pellentesque urna et neque pellentesque, in tincidunt ante facilisis. Integer lectus massa, porta at velit et, iaculis tincidunt felis. Integer tortor tortor, placerat et blandit a, euismod at dolor. Donec faucibus nibh vel ullamcorper facilisis.",
		author: {
			username: 'Homer "Boomer"',
			id: '5e578f25d93f530c71607e88'
		},
		price: {
			value: '6',
			currency: 'EUR'
		},
		location: {
			lng: 13.4,
			lat: 49.4
		}
	}
]


function seedDB(){
	Comments.deleteMany({}, function(err){
		console.log(err)
	})
	// REMOVE ALL CAMPGROUNDS
	Campground.deleteMany({},function(err){
		if(err){
			console.log(err);
		} else {
			// CREATE CAMPGROUNDS FROM ARRAY
			console.log("Campgrounds deleted");
			data.forEach((campground) => {
				Campground.create(campground, function(err, data) {
					if(err){
						console.log(err);
					} else {
						console.log("Campgrounds added");
						// CREATE COMMENT FOR EACH CAMPGROUND
						Comments.create(
							{
								text: "This place is great but I wish there was internet",
								author: {
									username: "Homer \"Boomer\"",
									id: "5e578f25d93f530c71607e88"
								},
								date: new Date().toLocaleDateString(),
								star: 4
							}, function(err, comment){
								if(err){
									console.log(err)
								} else {
									data.comments.push(comment);
									data.save();
									console.log("Comment saved");
								}
							}
						)
					}
				})
			})
			
		}	
	});
};


module.exports = seedDB;