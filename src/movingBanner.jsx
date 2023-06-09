import React from "react";
import Product from "./product";
export default function MovingBanner () {
    return(
        <div id="carouselExampleAutoplaying" class="carousel slide" style={{width:"100%",marginTop:"100px"}}>
  <div class="carousel-inner" >
    <div class="carousel-item active" style={{width:"100%",gridTemplateColumns: "repeat(5, 1fr)",
  display: "grid"}} >
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
    </div>
    <div class="carousel-item" style={{width:"100%",gridTemplateColumns: "repeat(5, 1fr)",
  display: "grid"}}>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
    </div>
    <div class="carousel-item" style={{width:"100%",gridTemplateColumns: "repeat(5, 1fr)",
  display: "grid"}}>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
      <div><Product/></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">

  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">

  </button>
</div>
    )
}