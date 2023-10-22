const router = require("express").Router();
const passport = require("passport");


router.get("https://backend-portfolio-igy4.onrender.com/login/failed", (req,res)=>{
    res.status(401).json({
        success: false,
        message: "failure",
    })
});

router.get("https://backend-portfolio-igy4.onrender.com/login/success", (req,res)=>{
    if (req.user) {
        res.status(200).json({
        success: true,
        message: "success",
        user: req.user
        
    });
  }
});

router.get("/logout", (req,res)=>{
    req.logout();
    res.redirect("https://frontend-portfolio-aryan.vercel.app");
});

//router.get("/google/callback", passport.authenticate("google",{}));

router.get("https://backend-portfolio-igy4.onrender.com/google/callback", passport.authenticate("google",{
    scope:["profile"],
    successRedirect:"https://frontend-portfolio-aryan.vercel.app",
    failureRedirect:"https://backend-portfolio-igy4.onrender.com/login/failed"
}));

module.exports = router;