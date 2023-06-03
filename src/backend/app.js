
require('dotenv').config();
const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const app = express();
const authRoute = require('./routes/auth')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');
const session = require('express-session')
const mongoose = require('mongoose');
const { json } = require('stream/consumers');




main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/UserDB');
};

const userSchema = new mongoose.Schema({
  userName: String,
  id : String,
  email : String

});

const User = mongoose.model('User', userSchema);

app.use(cookieSession(
    {
        name:"session",
        keys:["google"],
        maxAge: 24*60*60*100
    }
));




app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
    {
    origin:"http://localhost:3000",
    methods :"GET,POST,PUT,DELETE",
    credentials : true
}));

//const Login = mongoose.model("Login", loginSchema);

function SaveData (profile){
  
    let user = new User();
    user.userName = profile.user.displayName;
    user.id = profile.user.id;
    const doc = user.save();

    console.log(doc);
  
}

app.use(session({
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
}));
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    
    
    done(null,profile)

    

  }
));




passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})

app.use("/auth", authRoute);

app.listen(5000,()=>{
    console.log("Server Running at port 5000");
})