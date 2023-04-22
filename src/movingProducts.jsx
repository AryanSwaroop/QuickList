export default function MovingProducts(){
    return(
        <div className="movingProductDiv">

        <div className="divItems">
            <p className="productDescription">Best&nbsp;Of <br />Products <br />This week</p>
            <img src="banner.png" style={{width:"100%",height:"70px",marginTop:"20px"}}/>
            
        </div>
        <div className="divItems">
            <div>
              <img src="clothes.jpg" className="ProductImage" />
              <h5>Clothes</h5>
            </div>
        </div>
        <div className="divItems">
                <div>
                <img src="cooler.jpg" className="ProductImage" />
                <h5>Cooler</h5>
                </div>
        </div>
        <div className="divItems">
                <div>
                <img src="computer.jpg" className="ProductImage" />
                <h5>Computer</h5>
                </div>
        </div>
        <div className="divItems">
                <div>
                <img src="gloves.jpg" className="ProductImage" />
                <h5>Gloves</h5>
                </div>
        </div>
        

        

        </div>
    )
}