export default function Signup(){
    return(
        <div>
           <div className="SignupBox">
             <div className="subSignup">
             <div className="SignupForm">
                <form>
                    
                    <label className="formChildren" style={{marginTop:"5%"}}>Full Name</label>
                    <input placeholder="Example:John Doe" style={{marginBottom:"5%",width:"60%"}}></input>
                    <label className="formChildren">Phone Number</label>
                    <input placeholder="Example:99XXXXXX21" style={{marginBottom:"5%",width:"60%"}}></input>
                    <label className="formChildren">Email Address</label>
                    <input placeholder="Example:Johndoe@gmail.com" style={{marginBottom:"5%",width:"60%"}}></input>
                    <button type="submit" className="SubmitButton">Proceed</button>
                </form>
                <p style={{marginTop:"3%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>
             </div>
             <div className="subSignup">
             <div className="SignupForm">
                <div className="signButton" style={{backgroundColor:"#CE5959"}}><h2 className="buttonText">Google&nbsp;<i class="fa-brands fa-google" style={{color: "#ffffff"}}></i></h2></div>
                <div className="signButton" style={{backgroundColor:"#19376D"}}><h2 className="buttonText">FaceBook&nbsp;<i class="fa-brands fa-facebook" style={{color: "#ffffff"}}></i></h2></div>
             </div>
             </div>
           </div>
        </div>
    )
}