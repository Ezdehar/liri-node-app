require("dotenv").config(); 

var fs = require("./keys.js", "utf8", function(err, data) {
		//var keys = require
	if (err) {
		return console.error(err);
	}
	console.log("this is uploaded"); 

	var spotify = new Spotify(keys.spotify);
	var client = new Twitter(keys.twitter);
	var keys = process.env;
	
	for (var i = 0; i < keys.length; i++) {
		
		console.log(keys[i]);
	}
	
});

//function Exports(key) {

//console.log("\nKey:" + this.key);

//this.printKey = function () {
//	
//module.exports = {
//	APIKey: APIKey
//};

//};