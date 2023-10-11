import React from "react";
import dataHandler from './G-dataHandler';

export default function TopBar() {


    const userPhoto = dataHandler().user;
    console.log(userPhoto);
    

   return(
    <div className="topBar" >
        <div className="topbarElements" ></div>
        <div className="topbarElements">
            <a href="/"><img src="newlogo.png" className="logo" /></a>
        </div>
        <div className="navbar-search-div"><input placeholder="search site" type="text">
        
        </input><i class="fa-solid fa-magnifying-glass" style={{color: "#010005",marginLeft:"10px"}}></i></div>
        <div></div>
        <div><a href="/signup"><button className="topbar-signup" ><i class="fa-solid fa-right-to-bracket" style={{color: "white",height:"2px",width:"2px"}}></i></button></a></div>
        <div></div>
        <a href="sellerPage" style={{textDecoration : "none"}}>
        <div className="ListingButton">Sell&nbsp;<i class="fa-solid fa-check-double"></i></div>
        </a>
        <div></div>
        <div > <img src={userPhoto ? userPhoto.photos[0].value : null } className="profilePicture"/></div>
    </div>
   )
} ; 
