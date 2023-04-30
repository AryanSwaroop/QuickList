//jshint esversion:6

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const Passportlocal = require('passport-local-mongoose')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate')



// const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);
const app = express();
const md5 = require("md5");
const cookieSession = require('cookie-session');




app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.use(session({
    secret : "Little",
    resave : false,
    saveUninitialized : false

}));


app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect("mongodb://0.0.0.0/loginDB");
// //mongoose.set("useCreateIndex",true); --> depricated

// const loginSchema = new mongoose.Schema({
//     email:String,
//     password:String,
//     googleId:String

// });

// loginSchema.plugin(Passportlocal);
// loginSchema.plugin(findOrCreate);

// const Login = mongoose.model("Login", loginSchema);
//   passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/secrets",
//     userProfileUrl : "https://www.googleapis.com/oauth2/v3/userinfo",
//     passReqToCallback : true
//   },
//   function(accessToken, refreshToken, profile,email, cb) {
//     Login.findOrCreate({ googleId: email.id }, function (err, user) {
//       return cb(err, user);
//     });
    
//   }
// ));

// used to serialize the user for the session
// passport.serializeUser(function(user, done) {
//     done(null, user.id); 
//    // where is this user.id going? Are we supposed to access this anywhere?
// });

// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//     Login.findById(id, function(err, user) {
//         done(err, user);
//     });
// });


app.use(cookieSession(
  {
    name:"session",
    keys:["Users"],
    maxAge: 24 * 60 * 60 * 100
  }
))


app.use("/users/",require("../Routes/userRoute"))
// app.get("/secrets",function(req,res){

//     if (req.isAuthenticated()){
//         res.render("secrets.ejs");
//     } else {
//         res.redirect("/login")
//     }
// })

// app.get("/logout",(req,res)=>{

//     req.logout();
//     res.redirect("/");
// });

// app.post("/register",function(req,res){
   
//         const user = new Login({
//             email: req.body.username,
//             password: req.body.password
       
//     });


    
    
//     user.save(function(err){
//         if(err){
//             console.log("Maa chud gayi bhai");
//         } else {
//             res.render("secrets.ejs");
//         }
//     });

//     Login.register({username: req.body.username}, req.body.password, function(err,user){
//        if(err){
//         console.log(err)
//         res.redirect("/register");
//        } else {
//         passport.authenticate("local") (req,res,function(){

//             res.redirect("/secrets");
//         })
//        }
//     })

    

// // })

// app.post("/secrets", function(req,res){
//     const user = new Login({
//         username : req.body.username,
//         passport : req.body.passport
//     });

//     req.login(user , function(err){
//         if (err){
//             console.log(err);
//         } else {
//             passport.authenticate("local") (req,res,function(){
               
//                 res.redirect("/secrets");
//             })
//         }
//     })
    

// })

// app.get("/submit",function(req,res){
//     res.render("submit.ejs");
// })

// app.get("/auth/google",function(req,res){
//     passport.authenticate("google" ,{ scope:['profile','email'] })
// })

app.get('/auth/google' , passport.authenticate('google', { scope:
    ['profile' ,'email']
    }));

app.get("/auth/google/secrets", 
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/home");
  });

app.listen(8000, function() {
  console.log("Backend Server started on port 8000");
});
