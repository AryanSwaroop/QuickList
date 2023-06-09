import React from "react";

export default function IntroDiv () {
    return(
        <div className="introDiv">
    
            <div className="featuresBox1" >
            <i class="fa-solid fa-truck fa-2xl" style={{color: "white"}}></i>
            <h1 style={{color:"white",margin:"5px",fontFamily:"'Shadows Into Light', cursive"}}>Free Delivery</h1>
            </div>
            <div className="featuresBox2">
            <i class="fa-solid fa-cube fa-2xl" style={{color: "white",}}></i>
            <h1 style={{color:"white",margin:"5px",fontFamily:"'Shadows Into Light', cursive"}}>Safe Delivery</h1>
            </div>
            <div className="featuresBox3" >
            <i class="fa-solid fa-clock fa-2xl" style={{color: "white"}}></i>
            <h1 style={{color:"white",margin:"5px",fontFamily:"'Shadows Into Light', cursive"}}>Fast Delivery</h1>
            </div>
            <div>
            <div className="lineONbutton" style={{marginTop:"5rem"}}></div>

            <a href="/products" style={{color:"black"}}><button className="productsButton">
              <h1>Explore Products Gallery</h1>
            </button></a>
            <div className="lineONbutton" ></div>
            </div>
            
           
        </div>
    );
}