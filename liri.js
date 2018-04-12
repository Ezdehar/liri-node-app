require("dotenv").config(); 

var Twitter = require("twitter");

var request = require("request");

var keys = require("./keys");

var fs = require("fs");

var getMeMovie = function(movieName) {
    if (movieName === undefined) {
      movieName = "Mr. Nobody.";

var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=Trilogy";

request(movieUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var data = JSON.parse(body)

      console.log("Title: " + data.Title);
      console.log("Year: " + data.Year);
      console.log("Rated: " + data.Rated);
      console.log("IMDB Rating: " + data.imdbRating);
      console.log("Country: " + data.Country);
      console.log("Language: " + data.Language);
      console.log("Plot: " + data.Plot);
      console.log("Actors: " + data.Actors);
      console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
      }
    });
  };
};

var pick = function(caseData, functionData) {
  switch (caseData) {
      case "my-tweets":
      getMeTweets();
    break;
      case "spotify-this-song":
      getMepotify(functionData);
    break;
      case "movie-this":
      getMeMovie(functionData);
    break;
      case "do-what-it-says":
      doWhatItSays();
    break;
    default:
      console.log("LIRI doesn't know that");
      }
};

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

// var Twitter = require("twitter");

//   var client = new Twitter(keys.twitter);

// client.get("favorites/list", function(error, tweets, response) {


//       console.log("my-tweets")
//     // if (error) {
//     //     console.log(error)
//     // }






