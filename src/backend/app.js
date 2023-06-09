
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
const findOrCreate = require('mongoose-findorcreate')




main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/UserDB');
};

const userSchema = new mongoose.Schema({
  userName: String,
  _id : String,
  

});

const User = mongoose.model('User', userSchema);

app.use(cookieSession(
    {
        name:"session",
        keys:["google"],
        maxAge: 24*60*60*100
    }
));

userSchema.plugin(findOrCreate);


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
    user.userName = profile.displayName;
    user._id = profile.id;
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
    // User.findOrCreate({ _id : profile.id }, function (err, user) {
    //     return done(err, user);
    //   });

      userSchema.statics.findOrCreate = function findOrCreate(profile, done){
        var userObj = new this();
        this.findOne({_id : profile.id},function(err,result){ 
            if(!result){
               SaveData(profile);
            }else{
                done(null,profile);
            }
        });
    };
     
     done(null,profile)
  // const user = {
  //   userName : profile.displayName,
  //   avatar : profile.id
 
  // }

    

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