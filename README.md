# Liri-Node-App
 
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will display my latest tweets. To retrieve this data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. 
These Node packages crucial for the assignment:
-[Twitter](https://www.npmjs.com/package/twitter)
-[Spotify](https://www.npmjs.com/package/spotify)
-[Request](https://www.npmjs.com/package/request)

Created a JavaScript file named "keys.js" 

Inside the keys.js file, it will look like this:

JavaScript
console.log('this is loaded');
exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}
I had to get my own personal Twitter API keys by following these steps:
Visiting <https://apps.twitter.com/app/new>
Filling out the form with dummy data.
On the next page, i found the Keys and Access Tokens tab to get your consume key and secret. 
Copy and pasted them where the "<input here>" tags are inside my keys.js file.
Created my access token button to get your access token key and secret. 
Next, made a file called "random.txt".
Inside of "random.txt" I wrote out spotify-this-song,"I Want it That Way"
Then, I made another JavaScript file named "liri.js."  At the top of the file, I wrote the code needed to grab the data from keys.js. Then stored the keys in a variable.

Next I made it so liri.js can take in one of the following commands:
-my-tweets
-spotify-this-song
-movie-this
-do-what-it-says

What Each Command Should Do:
1) node liri.js my-tweets
--Will show your last 20 tweets and when they were created at in your terminal/bash window.

2) node liri.js spotify-this-song in the "random.txt" file
-This will show the following information about the song in your terminal/bash window
-Artist(s)
-The song's name
-A preview link of the song from Spotify
-The album that the song is from
if no song is provided then your program will default to, "The Sign" by Ace of Base

3) node liri.js movie-this "<movie name here>"
This will output the following information to your terminal/bash window:
-Title of the movie.
-Year the movie came out.
-IMDB Rating of the movie.
-Country where the movie was produced.
-Language of the movie.
-Plot of the movie.
-Actors in the movie.
-Rotten Tomatoes Rating.
-Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4) node liri.js do-what-it-says
-Using the "fs" Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
-It should run "spotify" for "I Want it That Way," as follows the text in "random.txt
