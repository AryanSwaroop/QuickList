import React, { useEffect, useState } from "react";
import axios from "axios";
import { stringify } from "querystring";



//import { json } from "node:stream/consumers";

export default function Products () {
    const [product , setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://backend-portfolio-igy4.onrender.com/ProductData")
        .then(Prod => {setProduct(Prod.data);})
        .catch(err => {console.log(err)})
    },[])

    const dataShower = (item , itemIndex) => {
        return(
            
            <div className="Product_Template" id = {item._id} >
            <img src={require('.././backend/uploads/' + item.prodPhotoId)} className="productDisplay" />
            <h4>Type : {item.prodType}</h4>
            <h3>Name : {item.prodName}</h3>
            </div>
        )
    }
    return (
        <div className="productDiv">
            
             
             {product.map(dataShower)}
                
             
        </div>
    )
}