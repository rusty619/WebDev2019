var express = require('express');
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Anthony", "Kevin","Fazeel", "Pep","Ruslan"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

// "/friends"
app.get("/friends", function(req, res){
    res.render("friends",{friends:friends});
})

app.listen(8080,function(){
    console.log("server started!!");
});