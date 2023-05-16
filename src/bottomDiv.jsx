import React from "react";

export default function BottomDiv () {
    return(<div>
    <h3 className="loveMessage">Made With <i class="fa-solid fa-heart" style={{color: "#ff0000"}}></i> In INDIA</h3>
    
        <div className="BottomDiv">
          <div className="SubBottom">
            <p style={{fontSize:"2rem"}}><b><u>Our Social And Contacts</u></b></p>
            <span className="socialDiv">

           <button className="socialsButton"><i class="fa-brands fa-instagram" style={{color: "#ee6dbf"}}></i></button><br />
           <button className="socialsButton"><i class="fa-brands fa-facebook" style={{color: "#1f71ff"}}></i></button><br />
           <button className="socialsButton"><i class="fa-brands fa-reddit" style={{color: "#ff4d00"}}></i></button><br />
           <button className="socialsButton"><i class="fa-brands fa-discord" style={{color: "#4f4cdc"}}></i></button><br />
           <button className="socialsButton"><i class="fa-brands fa-twitter" style={{color: "#4287ff"}}></i></button><br />
           </span>

          </div>
          <div className="SubBottom">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br />. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </div>
        </div>
        </div>
    )
}