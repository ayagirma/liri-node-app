
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

// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create an empty variable for holding the movie name
var movieName = "";
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + " " + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }

}

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title of the movie: " + JSON.parse(body).title);
    console.log("Year the movie came out: " + JSON.parse(body).year);
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).tomatoes);
    console.log("Country where the movie was produced: " + JSON.parse(body).country);
    console.log("language of the movie: " + JSON.parse(body).language);
    console.log("Plot of the movie: " + JSON.parse(body).plot);
    console.log("Actors of the movie: " + JSON.parse(body).actors);
  }
  
 });

//=========================================================================================================

// //store the text filename that given from the command line

//   var textFile = process.argv[3];

//  // append the contents of random.txt

//  var contents = fs.readFileSync("./random.txt ", "utf-8", function(err, data){
//    if(err){
//     return console.log(err);
//       console.log(data.statusCode);
//   }

//    // break the string down by comma separation and store into output array.

//    var output = contents.split(",");

//   // loop through to the created output array
//   for (var i =0; i<output.length; i++) {
//     //print each element (item) of the array.
//     console.log(output[i]);
//      }
// });