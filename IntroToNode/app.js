//var catMe = require('cat-me');
//var knockknock = require('knock-knock-jokes');
//console.log(knockknock())
//console.log(catMe());

// var faker = require('faker');

// var products = [];

// for(var i = 0; i < 10; i++)
// {
//     products[i] = faker.commerce.productName();
// } 

// console.log("==================================");
// console.log("WELCOME TO THE CIRCUS OF VALUE");
// console.log("==================================");

// for(var j = 0; j < 10; j++)
// {
//     console.log(products[j] + " - $" + faker.commerce.price());
// }

var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye");
});

// "/dog" => "MEOW?"
app.get("/dog", function(req, res){
    res.send("MEOW?");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome To The " + subreddit.toUpperCase() + " SubredditName");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome To The Comments Page!!");
});

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!")
});

app.listen(3000, function(){
    console.log("server 3000 is running");
});

