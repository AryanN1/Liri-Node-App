var dataKeys = require("keys.js");
var fs = require('fs');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var writeToLog = function(data) {
    fs.appendFile("random.txt"),
        console.log("random.txt was updated!");
    };
};

var artists = function(artists) {
    return artsts.name;
}

var spotify = function(song) {
    if (song === undefined) {
        song = "Unforgettable";
    }
}
var getMyTweets = function() {

    var client = new twitter
    var param = {
        screen_name: "AryanNa1m1"

    };
}

client.get("user_timeline", params, function(error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].created_at);
                    console.log();

                }
            };