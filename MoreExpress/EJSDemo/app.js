var express = require("express");
var app = express();

app.use(express.static("public"));//to use the folder public
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home");
    //res.send("<h1>Welcome to the home page!</h1>");
});

//-- /fallinlovewith/rusty 
app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My Adorable Pet Bunny", author: "Tye"},
        {title: "Can You Believe It Or Not??", author: "Ruslan"},
    ];
    res.render("posts",{posts: posts});
});

app.listen(8080,function(){
   console.log("Server is listening!!");
});


//--------FROM DIFFERENT VIDEO----------------


// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var path = require('path');

// var app = express();

//app.use(bodyParser());
//app.use(cors());

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// app.get('/', function(request, response){
//     response.render('home.ejs');
// });

// app.listen(8080,function(){
//    console.log("Server is listening!!");
// });