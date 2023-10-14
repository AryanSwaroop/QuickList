import React, { useEffect, useState } from "react";
import dataHandler from './G-dataHandler';
import axios from "axios";

export default function TopBar() {


    const userPhoto = dataHandler().user;
    console.log(userPhoto);

    const [data , setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/ProductData")
        .then(Prod => {setProduct(Prod.data);})
        .catch(err => {console.log(err)})
    },[])
    
    const searchResult = (item) => {
        if (item.prodName == searchInput){
            console.log("Mil Gaya")
        } else {
            console.log("Nahi mila bhaiya ")
        }

    }

    const searchStart = (e) => {
        data.map(searchResult)
    }

    const [searchInput , setSearchInput] = useState([]);

    const SearchValue = (e) => {
        setSearchInput(...searchInput , [e.target.value] )
    }
    

   return(
    <div className="topBar" >
        <div className="topbarElements" ></div>
        <div className="topbarElements">
            <a href="/"><img src="newlogo.png" className="logo" /></a>
        </div>
        <div className="navbar-search-div"><input className="search-input" placeholder="search site" type="text" onChange={SearchValue}style={{width:"20%"}}>
        
        </input><button type="button" onClick={searchStart}><i class="fa-solid fa-magnifying-glass" style={{color: "#010005",marginLeft:"10px"}}></i></button>
        </div>
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
