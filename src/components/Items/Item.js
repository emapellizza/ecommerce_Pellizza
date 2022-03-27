//detalle breve del porducto que luego te lleva a el detalle del producto
import React from "react"
import "./Items.css"
import ItemCount from "./ItemCount"

function Items ({data}) {

    const {id,title,price,pictureURL} = data
    return(
        <div>
            <img src={`./${pictureURL}`} alt="house"/>

            <div>
                <h2>{title}</h2>
                <p>Price: {price}</p>
            </div>

            <div>
                <ItemCount/>
            </div>
            
        </div>
    )

  

}

export default Items;