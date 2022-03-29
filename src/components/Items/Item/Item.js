//detalle breve del porducto que luego te lleva a el detalle del producto
import React from "react"
import "./Items.css"


function Items ({data}) {

    const {id,title,price,pictureURL} = data
    return(
        <div className="Item">
            <img src={`./${pictureURL}`} alt="house"/>

            <div>
                <h2>{title}</h2>
                <p>Price: {price}</p>
            </div>
            
        </div>
    )

  

}

export default Items;