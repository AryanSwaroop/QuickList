import React from "react";

export default function BodyTop (){
    return (<div>
        
        <div className="bodyTop" style={{zIndex:"+2"}}>
        <div className="LeftBigBox" style={{height:"540px",width:"200px"}}>
        <h1 className="BodyTopText">FOR YOUNG</h1><h1 className ="BodyTopText">AND&nbsp;OLD</h1>
        </div>
        <div className="LeftBigBox">
        <img src="multi.png" className="BorderImage" style={{height:"540px",marginRight:"80px"}} />


        </div>
        <div className="LeftBigBox">
        <div className="RightBigBox"><img src="officeProducts.png" className="BorderImage" style={{height:"280px",marginLeft:"0px",marginRight:"150px"}}/></div>
        <div className="RightBigBox"><img src="penpaper.png"  className="BorderImage" style={{height:"170px",marginLeft:"0px"}} /></div>
        </div>
          
       </div>
       </div>
    )
}