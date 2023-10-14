
import React, {useEffect, useState }  from 'react';
import './App.css';
import dataHandler from './G-dataHandler';



const google = ()=>{
    window.open("http://localhost:5000/auth/google/callback","_self")
}

export default function Signup(){

  const logout = () => {
    window.open("http://localhost:5000/auth/logout","_self");
  };

  const user = dataHandler().user.displayName;
  console.log(user + "signup");
 
    return(
             <div style={{height:"45vw"}}>
                <div className="signButton" style={{backgroundColor:"#CE5959"}} onClick={google}><h2 className="buttonText">Google&nbsp;<i class="fa-brands fa-google" style={{color: "#ffffff"}}></i></h2></div>
         
                <div className= "signoutButton" onClick={logout}><a><h2 style={{marginTop : "30px",paddingTop:"40px"}}>Signout&nbsp;<i class="fa-solid fa-key" style={{color: "#ffffff"}}></i></h2> </a> </div>
             </div>
           
        
    )
}

