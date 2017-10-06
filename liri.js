
//grab the data  from keys.js then store the veys in a variable
var myKeys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var fs = require('fs');
var request = require('request');
var argv = process.argv[3];
var textFile = process.argv[4];

var mySpotify = new spotify({
   id: myKeys.mySpotifyId,
   secret: myKeys.mySpotifySecret
  //var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

 });
  // this is twitter
  var client = new twitter({
  consumer_key: myKeys.consumer_key,
  consumer_secret: myKeys.consumer_secret,
  access_token_key: myKeys.access_token_key,
  access_token_secret: myKeys.access_token_secret

 });

console.log(process.argv[2]);
if(process.argv[2] == "my-tweets"){
  mytweets();
}else if(process.argv[2] == "spotify-this-song"){
  spotifySong(argv);
 }else{(process.argv[2] == "movie-this")
 movie(argv);
}

function movie(title,year, rating,rottenTomatoRating, country,language, plot,actors){
  this.title = title;
  this.year = year;
  this.rating = rating;
  this.rottenTomatoRating = rottenTomatoRating
  this.country = country;
  this.language = language;
  this.plot = plot;
  this.actors = actors;
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

var movieName = '';

  request(queryUrl, function(error, response, body) {

  // If the request is successful
    for (var i = 8; i < response.length; i++){
      if (!error && response.statusCode === 200) {
      movieName.queryUrl.response([i]);
      } else {
         movieName += nodeArgs[i];
      }
      return;
      }
      //console.log(response);
      console.log("===========================");
      console.log(body);
  });
}

function spotifySong(searchterm){
   mySpotify.search({ type: 'track', query:searchterm, limit:'5'}, function (error, data){
    if (error) {
       console.log('error occurred: ' + error);
     return;
    };
    var song = data.tracks.items;
     console.log(song);
    for(var i = 0; i<song.length; i++){
      console.log(song[i].name);
    }
});

}

 function mytweets (){

  client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
        for (var i = 0; i<tweets.length; i++){
            console.log(tweets[i].created_at); // this is coming with the first tweet created
            console.log(tweets[i].text)
          }  
  }
  else{
     return console.log(error);
  }
 });
}
//=============================================================================
 // append the contents of random.txt
function myMovie(){
 var content = fs.readFileSync("./random.txt ", "utf-8", function(err, contents){
     if(err){
      return console.log(err);
        console.log(contents.statusCode);
     }
     // break the string down by comma separation and store into output array.
     var output = content.split(",");
    // loop through to the created output array
    for (var i =0; i<output.length; i++) {
      //print each element (item) of the array.
      console.log(output[i]);
       }
 });
}