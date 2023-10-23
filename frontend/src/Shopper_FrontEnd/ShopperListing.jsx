import React, { useState } from "react";
import dataHandler from "../G-dataHandler";
import axios from 'axios';

export default function ListingView(){

    const [file,setfile] = useState(); 
    
    const [Data,setData] = useState([]);

    const handleChange = (e) => {
        if (e.target.name == "ProductName"){
            setData({...Data , [e.target.name] : e.target.value})
        } else {
            setData({[e.target.name] : e.target.value , ...Data})
        }
        
      
    }

    const userPhoto = dataHandler().user;
    
    
    const upload = (e) => {
        e.preventDefault();
        axios.post('https://backend-portfolio-igy4.onrender.com/DataUpload' , Data,{
            headers: {
                "Access-Control-Allow-Origin" : "https://frontend-portfolio-aryan.vercel.app",
                'Access-Control-Allow-Credentials': true
            }
        }).then(res => {})
        .catch(er => console.log(er))
    }
    

    const uploadPhoto = (e) => {
        
        const formData = new FormData();
        formData.append('file' , file)
        axios.post('https://backend-portfolio-igy4.onrender.com/upload', formData,{
            headers: {
                "Access-Control-Allow-Origin" : "https://frontend-portfolio-aryan.vercel.app",
                'Access-Control-Allow-Credentials': true
            }
        })
        .then(res => {})
        .catch(er => console.log(er))

    }
return(

        <div className="SellerInput">

        
           
            <div className="innerInputL" >
                <h1 className="SellerHeading">Product Details</h1>
               
                <form style={{marginTop:"5%"}}>
                <label className="inputArea">Product Name :&nbsp;&nbsp;
                    <input name = "ProductName" type="text" onChange={handleChange} style={{backgroundColor:"white",width:"50%",color:"black"}}></input>
                </label>
                <br />
                <label className="inputArea">Listing Date :&nbsp;&nbsp;
                    <input name="listingDate" onChange={handleChange} type="date"></input>
                </label>
                <br />
                <label className="inputArea">Product Type :&nbsp;&nbsp;
                        <select name="itemType" onChange={handleChange} id="item-types"> 
                            <option>Select One</option> 
                            <option value="Clothing">Clothing</option> 
                            <option value="HouseHold">HouseHold</option> 
                            <option value="Office">Office</option> 
                            <option value="Electronics">Electronics</option> 
                        </select>
                </label>
                <br />
                <label className="inputArea">Product Photo :&nbsp;&nbsp;
                    <input type="file" name= "file" onChange={(e) => setfile(e.target.files[0])}></input>
                    <button type="button" onClick={uploadPhoto}>Upload Photo</button>
                </label>
                <br />


                <button type="button" className="submitSeller" onClick={upload} > Submit Product</button>
                <p style={{marginLeft:"5%",color:"white",marginTop:"2%"}}>All Blanks are compulsory , not filling any one could result in failed submission. **</p>
                </form>

                
            </div>
            
            
       
       </div>


)
    
}