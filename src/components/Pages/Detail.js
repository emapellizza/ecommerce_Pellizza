import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProducts from "../../Utils/MockProducts";
import itemCounter from "../Items/Item/ItemCount"

function PageItemDetail(){
     
    const {id} = useParams()
    const [product,setProduct] = useState({})

    useEffect ( () => {
        productId(mockProducts,id)
    },[id] ) 

    const productId = (array , id) => {
        return array.filter( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    console.log("mi id",id)
    console.log("mi producto",product.title)

    return(
        <div>
             <div style={{flexdirection: 'column',justifycontent: 'center', padding: "15%"}}>
                    <img src={`../${product. pictureURL}`} alt={`${product.title}`} />
                </div>

            <div style={{flexdirection: 'column',justifycontent: 'center', padding: "20%"}}>
                    <h3 >{product.title}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
           
        </div>
    )

}

export default PageItemDetail