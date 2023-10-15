import React from "react";

export default function BottomDiv () {
    return(<div>
    <h3 className="loveMessage">Made With <i class="fa-solid fa-heart" style={{color: "#ff0000"}}></i> In INDIA</h3>
    <h3 style={{marginBottom:"5%",marginTop:"15%",color:"white",fontFamily: "'Shadows Into Light', cursive",fontSize:"400%"}}>Our Socials</h3>
        <div className="BottomDiv">
          
           
           
           <button className="socialsButton"><i class="fa-4x fa-brands fa-instagram" style={{color: "#ee6dbf"}}></i></button><br />
           <button className="socialsButton"><i class="fa-4x fa-brands fa-facebook" style={{color: "#1f71ff"}}></i></button><br />
           <button className="socialsButton"><i class="fa-4x fa-brands fa-reddit" style={{color: "#ff4d00"}}></i></button><br />
           <button className="socialsButton"><i class=" fa-4x fa-brands fa-discord" style={{color: "#4f4cdc"}}></i></button><br />
           <button className="socialsButton"><i class="fa-4x fa-brands fa-twitter" style={{color: "#4287ff"}}></i></button><br />
           
          
       
       </div>
       </div>
    )
}