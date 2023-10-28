import React, { useEffect, useState } from "react";
import dataHandler from './G-dataHandler';
import axios from "axios";

export default function TopBar() {


    const userPhoto = dataHandler().user;
    console.log(userPhoto);

    const [data , setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://backend-portfolio-igy4.onrender.com/ProductData")
        .then(Prod => {setProduct(Prod.data);})
        .catch(err => {console.log(err)})
    },[])
    
    const searchResult = (item) => {
        if (item.prodName == searchInput){
            console.log("Mil Gaya")
        } else {
            console.log("Nahi mila bhaiya")
        }

    }

    const searchStart = (e) => {
        data.map(searchResult)
    }

    const [searchInput , setSearchInput] = useState([]);

    const SearchValue = (e) => {
        setSearchInput(...searchInput , [e.target.value] )
    }

    const hideSidebar = () => {
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }
  
    const showSidebar = () => {
      const  sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    return (
      <div>
        <nav>
        <ul class="sidebar">
  
            <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="#"><img src={userPhoto ? userPhoto.photos[0].value : "taijitu.png" } className="profilePicture"/></a></li>
            <li class = "hideOnMobile"><a href="/">Home</a></li>
            <li class = "hideOnMobile"><a href="/signup">Signup&nbsp;<i class="fa-solid fa-right-to-bracket" style={{color: "white",height:"2px",width:"2px"}}></i></a></li>
            <li class = "hideOnMobile"><a href="sellerpage">Sell&nbsp;<i class="fa-solid fa-check-double"></i></a></li>
          </ul>
          <ul>
            <li><a href="#"><img src={userPhoto ? userPhoto.photos[0].value : "taijitu.png" } className="profilePicture"/></a></li>
            <li class = "hideOnMobile"><a href="/">Home</a></li>
            <li class = "hideOnMobile"><a href="/signup">Signup&nbsp;<i class="fa-solid fa-right-to-bracket" style={{color: "white",height:"2px",width:"2px"}}></i></a></li>
            <li class = "hideOnMobile"><a href="sellerpage">Sell&nbsp;<i class="fa-solid fa-check-double"></i></a></li>
           
            
            <li class="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
          </ul>
        </nav>
      </div>
    );
   
    

//    return(
//     <div>
//         <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary" >
//   <div class="container-fluid" style={{boxShadow: "0px 5px 30px white"}}>
//     <a class="navbar-brand" href="/"><img src={userPhoto ? userPhoto.photos[0].value : "taijitu.png" } className="profilePicture"/></a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="sellerpage">Sell&nbsp;<i class="fa-solid fa-check-double"></i></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/signup">Signup&nbsp;<i class="fa-solid fa-right-to-bracket" style={{color: "white",height:"2px",width:"2px"}}></i></a>
//         </li>
        
        
//       </ul>
//     </div>
//   </div>
// </nav>
// {/*         
//         <div > <img src={userPhoto ? userPhoto.photos[0].value : null } className="profilePicture"/></div> */}
//     </div>
//    )
} ; 