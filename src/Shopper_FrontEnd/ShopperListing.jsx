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
        axios.post('http://localhost:5000/DataUpload' , Data)
        .then(res => {})
        .catch(er => console.log(er))
    }
    

    const uploadPhoto = (e) => {
        
        const formData = new FormData();
        formData.append('file' , file)
        axios.post('http://localhost:5000/upload', formData)
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
                </form>
                
            </div>
            <div className="innerInputR" >
            <div className="sellerPhotoHolder">
            <img src={userPhoto ? userPhoto.photos[0].value : null } className="profilePictureSeller"/>
            </div>
            </div>
            

       </div>


)
    
}