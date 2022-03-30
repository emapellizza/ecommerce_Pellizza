import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../Item/ItemCount"
import  MockProducts from "../../MockProducts"


function ItemDetail (){
    const {id} = useParams()
    const [product, setProduct] = useState()
    
    useEffect(()=>{
        productById(MockProducts,id)
    },[])

    const productById = (array,id) =>{
        MockProducts.map( (product)=> {
            if (product.id == id){
                return setProduct(product)
            }
        })
    }

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
