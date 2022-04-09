
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemCount from "../Item/ItemCount"


function ItemDetail ({product}){
    
    console.log("en item detail",product.title)

   
    return(

        <div>
            <div>
                
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
            </div>
            <ItemCount/>
        </div>
    )
}

export default ItemDetail
