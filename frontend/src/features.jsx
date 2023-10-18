import React from "react";
export default function Features(){
    return(
        <div className="featuresBox">
            <div style={{marginTop:"200px"}}>
            <i class="fa-solid fa-truck fa-2xl" style={{color: "#ffffff"}}></i>
            <h1 style={{color:"white",margin:"5px",fontFamily:"'Bruno Ace SC', cursive"}}>Free Delivery</h1>
            </div>
            <div style={{marginTop:"200px"}}>
            <i class="fa-solid fa-cube fa-2xl" style={{color: "#ffffff"}}></i>
            <h1 style={{color:"white",margin:"5px",fontFamily:"'Bruno Ace SC', cursive"}}>Safe Delivery</h1>
            </div>
            <div style={{marginTop:"200px"}}>
            <i class="fa-solid fa-clock fa-2xl" style={{color: "#ffffff"}}></i>
            <h1 style={{color:"white",margin:"5px",fontFamily:"'Bruno Ace SC', cursive"}}>On Time Delivery</h1>
            </div>
        </div>
    )
}