var mongoose = require("mongoose");
const { post } = require("request");

//connect to db
mongoose.connect("mongodb://localhost/blogdemo");

// POST - title, content
var postSchema = new mongoose.Schema({
    title:     String,
    content:   String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email:  String,
    name:   String,
    posts: [postSchema]
});
var User = mongoose.model("user", userSchema);



// var newUser = new User({
//     email: "Boxxy@brown.edu",
//     name: "Boxxy Brown"
// });
// newUser.posts.push({
//     title: "T-this is a box",
//     content: "Uh, uh, fool. Step Back"
// });
// newUser.save(function(err, user){
//     if(err){
//       console.log(err);
//     } else {
//       console.log(user);
//     }
// });



// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Finding The User Back
// User.findOne({name: "Boxxy Brown"}, function(err, user){
//     if(err){
//       console.log(err);
//     } else{
//         console.log(user);
//     }
// });
User.findOne({name: "Boxxy Brown"}, function(err, user){
    if(err){
      //console.log(err);
    } else{
        user.posts.push({
            title: "I'm friends with a toilet paper tube, an apple, and a box.",
            content: "Well, you gonna dis me boy, dis me to my face!"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else{
                  console.log(user);
            }
        });
    }
});

