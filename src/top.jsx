

export default function TopBar() {
   return(
    <div className="topBar" >
        <div className="topbarElements" ></div>
        <div className="topbarElements">
            <img src="newlogo.png" className="logo" />
        </div>
        <div className="navbar-search-div"><input placeholder="search site" type="text">
        
        </input><i class="fa-solid fa-magnifying-glass" style={{color: "#010005",marginLeft:"10px"}}></i></div>
        <div></div>
        
        <div><button className="topbar-signup"><b>Login/Logout</b></button></div>
        

    </div>
   )
} ; 
