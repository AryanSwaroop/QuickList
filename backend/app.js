


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
const multer = require('multer');



app.use(express.json())


main().catch(err => console.log(err));



async function main() {
  await mongoose.connect('mongodb+srv://aryan-admin:'+process.env.Pass+'@cluster0.7tgucgm.mongodb.net/?retryWrites=true&w=majority');

};

app.get("/",(req,res)=>{
  res.send("Hello I am up!")
})

const userSchema = new mongoose.Schema({
  userName: String,
  _id : String,
  

});

const productSchema = new mongoose.Schema({
    prodName: String,
    _id : String,
    prodListing : String,
    prodType : String,
    prodPhoto : String,
    prodPhotoId : String

    
  
  });

const User = mongoose.model('User', userSchema);

const Product = mongoose.model('Prod' , productSchema );

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
      
    origin:"https://frontend-portfolio-aryan.vercel.app",
    methods :"GET,POST,PUT,DELETE",
    credentials : true
}));

// const Login = mongoose.model("Login", loginSchema);

function SaveData (profile){
  
    let user = new User();
    user.userName = profile.displayName;
    user._id = profile.id;
    const doc = user.save();

    console.log(doc);
  
}



//array pushed data from Photo

var arr = [];

// for parsing MongoDB data to react 
app.get("https://backend-portfolio-igy4.onrender.com/ProductData" , (req,res)=>{
  Product.find()
  .then(Prod => { 
    res.json(Prod);
  }).catch(err => {
    res.json();
  })
})

function SaveProduct (Pdata){
  
    if(Pdata.ProductName == null || Pdata.itemType == null){
    
     
    } else {
      let product = new Product();
      product.prodName = Pdata.ProductName;
      product._id =  `${Date.now()}_${Pdata.ProductName}`;
      product.prodListing = Pdata.listingDate;
      product.prodType = Pdata.itemType;
      
      if (arr.length != 0 ){
        product.prodPhotoId = arr[0];
        arr = [];
      }
      
      const ProdData = product.save();
  
  
      console.log(ProdData);
  
    }
   
  
}



//userSchema.plugin(findOrCreate);

app.use(session({
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
}));
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://backend-portfolio-igy4.onrender.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ _id : profile.id }, function (err, user) {
    //     return done(err, user);
    //   });

      userSchema.statics.findOrCreate = function findOrCreate(profile, done){
        //var userObj = new this();
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
//saving image file using multer.


app.use(express.urlencoded({ extended : false }));


const storage = multer.diskStorage({

    destination: (req ,file, cb) => {
      return cb(null,"./uploads");
    },
    filename: (req ,file, cb) => {
         cb(null , `${Date.now()}-${file.originalname}` );
    } 

})

const upload = multer({storage});

app.post('https://backend-portfolio-igy4.onrender.com/DataUpload', (req,res)=>{
  console.log(req.body);

  SaveProduct(req.body);
  
})


app.post('/upload',upload.single("file"), (req, res) => {
        console.log(req.file.filename);
        const image = req.file.filename;
        arr.push(image);

        
        res.redirect("/");
        window.open("https://frontend-portfolio-aryan.vercel.app","_self")

})

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})



app.use("/auth", authRoute);

app.listen(process.env.PORT , ()=>{
    console.log("Server Running at port 5000");
})

