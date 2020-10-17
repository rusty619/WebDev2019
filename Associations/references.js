var mongoose = require("mongoose");
const { post } = require("request");

//connect to db
mongoose.connect("mongodb://localhost/blogdemo2");

var Post = require("./models/post");
var User = require("./models/user");



Post.create({
    title: "How to cook the eat burger pt 4",
    content: "It's Bad!!"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});


// Find User
// Find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Saget"
// });


