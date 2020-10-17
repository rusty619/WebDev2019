var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignemnt!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Mooo!",
        dog: "Woof Woof",
        cat: "Meow Meow Meow Meow!!"
    }  
    var animal = req.params.animal; 
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:number", function(req, res){
    var word = req.params.word;
    var number = req.params.number;
    var result = "";
    

    for(var i = 0; i < number; i++)
       {
          result += word;
       }
    
    res.send(result);   
    console.log(word + " " + number);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found....what are you doing with your life?");
});

app.listen(8080, function(){
    console.log("Server port 8080 is running");
});