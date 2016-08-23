'use strict';

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


let imageUrlsArray = [
	{
		url: "https://static.wixstatic.com/media/649891_eda51d4ce9aa459daee8e1d4ddf9c1b0.jpg/v1/fill/w_322,h_199,al_c,q_80,usm_0.66_1.00_0.01/649891_eda51d4ce9aa459daee8e1d4ddf9c1b0.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_3dd3bd891b0d4a528d0acd885dedcbfc.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_3dd3bd891b0d4a528d0acd885dedcbfc.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_64ae927c37f64ea092a1ea3e646114ad.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_64ae927c37f64ea092a1ea3e646114ad.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_f0f7c33defd84bc5a57203b0d547932d.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_f0f7c33defd84bc5a57203b0d547932d.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_bcb53897f5b0469a8eb0514665cc46a6.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_bcb53897f5b0469a8eb0514665cc46a6.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_67241af61f22492b82cbbbce1b4348e9.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_67241af61f22492b82cbbbce1b4348e9.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_7a38c55094934991d89903515bd20bf0.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_7a38c55094934991d89903515bd20bf0.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_eca70d71e70c468ba05fc2b7c2e01360.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_eca70d71e70c468ba05fc2b7c2e01360.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_eacd7f82c45f4344acbe00f92233c9b4.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_eacd7f82c45f4344acbe00f92233c9b4.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_4797f7179d6ce92e2b073b4df403190c.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_4797f7179d6ce92e2b073b4df403190c.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_82a6bb4dd693410d987b05ac094891d0.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_82a6bb4dd693410d987b05ac094891d0.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_1e4e04def0ee47d49c8b5311738ea172.jpeg/v1/fill/w_260,h_161,al_c,q_80,usm_0.66_1.00_0.01/649891_1e4e04def0ee47d49c8b5311738ea172.jpeg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_c1e3f22cf374421fb62f581bd906dc32.jpg/v1/fill/w_298,h_184,al_c,q_80,usm_0.66_1.00_0.01/649891_c1e3f22cf374421fb62f581bd906dc32.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_1a10a11baa9e42d088e6bccb2a1cf199.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_1a10a11baa9e42d088e6bccb2a1cf199.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_3d522d0791fd4b59a433f5e739bcd2d2.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_3d522d0791fd4b59a433f5e739bcd2d2.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_40e5b4c335694f36b045512767a28d3a.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_40e5b4c335694f36b045512767a28d3a.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_eeb455e63c7944ad908d0f717e061034.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_eeb455e63c7944ad908d0f717e061034.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_b3dacff84e9a490e81c74b48870d1264.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_b3dacff84e9a490e81c74b48870d1264.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_88e858b951934f89bc406243f65747dc.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_88e858b951934f89bc406243f65747dc.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_b55d0ba1246b41ccb9f0bc3604a23da6.jpg/v1/fill/w_300,h_186,al_c,q_80,usm_0.66_1.00_0.01/649891_b55d0ba1246b41ccb9f0bc3604a23da6.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_e041bda8d772499f9667f226d3b66106.jpg/v1/fill/w_400,h_248,al_c,q_80,usm_0.66_1.00_0.01/649891_e041bda8d772499f9667f226d3b66106.jpg",
		name: null
	},
	{
		url: "https://static.wixstatic.com/media/649891_96ea194385bb2eefab5019c1b6022089.jpg/v1/fill/w_257,h_159,al_c,q_80,usm_0.66_1.00_0.01/649891_96ea194385bb2eefab5019c1b6022089.jpg",
		name: null
	},
]

imageUrlsArray.forEach((x, index) => {
	download(x, `gallery/image-${index}.jpg`, function(){
	  console.log('done');
	});
});