export default function MovingBanner () {
    return(
        <div id="carouselExampleAutoplaying" class="carousel slide" style={{width:"100%",marginTop:"100px"}}>
  <div class="carousel-inner" style={{width:"100%"}}>
    <div class="carousel-item active" style={{width:"100%"}}>
      <img src="techBanner.png" class="d-block w-100"  style={{width:"100%",height:"550px"}} />
    </div>
    <div class="carousel-item" style={{width:"100%"}}>
      <img src="sportsBanner.png" class="d-block w-100"  style={{width:"100%",height:"550px"}} />
    </div>
    <div class="carousel-item" style={{width:"100%"}}>
      <img src="beautyBanner.png" class="d-block w-100"  style={{width:"100%",height:"550px"}} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">

  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">

  </button>
</div>
    )
}