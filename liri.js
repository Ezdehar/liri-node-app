require("dotenv").config(); 

var keys = require("./keys.js");


var request = require("request");

var getMovie = function(movieName) {
	if (movieName === undefined) {
		movieName = "Mr. Nobody.";
	}

	var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy"

	request(movieUrl, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var data = JSON.parse(body)

			//console.log("data ================ >", data)
			console.log("year: ", data.Year)
		}
		if (error) {
			console.log(error)
		}
	})
}

var Twitter = require("twitter");

  var client = new Twitter(keys.twitter);
    // consumer_key: "",
    // consumer_secret: "",
    // access_token_key: "",
    // access_token_secret: ""

client.get("favorites/list", function(error, tweets, response) {
  if (!error && response.statusCode === 20) {
      var data = JSON.parse(body)

      console.log("my-tweets")
      //console.log(response);
    // }
    // if (error) {
    //     console.log(error)
    // }

var pick = function(caseData, functionData) {
  switch (caseData) {
    case "my-tweets":
      //getMyTweets();
      break;
    case "spotify-this-song":
      //getMeSpotify(functionData);
      break;
    case "movie-this":
      //getMovie(functionData);
      break;
    case "do-what-it-says":
      //doWhatItSays();
      break;
    default:
      console.log("LIRI doesn't know that");
  }
};

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);
});





