
//grab the data  from keys.js then store the veys in a variable
var myKeys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var fs = require('fs');
var request = require('request');
var mySpotify = new spotify({
   id: myKeys.mySpotifyId,
   secret: myKeys.mySpotifySecret

 });
  // this is twitter
  var client = new twitter({
  consumer_key: myKeys.consumer_key,
  consumer_secret: myKeys.consumer_secret,
  access_token_key: myKeys.access_token_key,
  access_token_secret: myKeys.access_token_secret

 });

console.log(process.argv[2]);

if(process.argv[2]==="my-tweets"){
  console.log(process.argv[2]);
  
client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
     console.log(tweets);
     console.log(response.statusCode);
  }

   return console.log(error);
 });
}

else if( process.argv[2]==="spotify-this-song") { // was 2
  var searchterm = process.argv[2]; // was 2
  mySpotify.search({ type: 'track', query:searchterm }, function (error, data){
    if (error) {
       console.log('error occurred: ' + error);
    };
  console.log(data.tracks.items);
  var songlist = data.tracks.items;
  // creat a for loop to loop through song list and tack out individual songs 
   for (var i =0; i<songlist.length; i++) {
//     //print each element (item) of the array
     console.log(songlist[i]);
   }
   
  });
}


//==================================================================================

//initialize

// 
var request = require("request");
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create an empty variable for holding the movie name
var movieName = "";
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
        }
        else {
           movieName += nodeArgs[i];
      }
}
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
   // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
   // console.log("Title of the movie: " + JSON.parse(body).Mr.Nobody);
   // console.log("Year the movie came out: " + JSON.parse(body).imdbRating);
   // console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
   // console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).imdbRating);
   // console.log("Country where the movie was produced: " + JSON.parse(body).imdbRating);
   // console.log("Language of the movie: " + JSON.parse(body).imdbRating);
   // console.log("Actors of the movie: " + JSON.parse(body).imdbRating);

  }
});

//=========================================================================================================

// // store the text filename that given from the command line

//  var textFile = process.argv[2];

// // // append the contents of random.txt

// var contents =fs.readFileSync("./random.txt ", "utf-8", function(err, data){
//   if(err){
//     return console.log(err);
//      console.log(contents.statusCode);
//   }

//   // break the string down by comma separation and store 
//   //into output array.

//   var output = data.split(",");

//   // loop through to the created output array
//   for (var i =0; i<output.length; i++) {
//     //print each element (item) of the array.
//     console.log(output[i]);
//   }
// });

 //=============================================================



