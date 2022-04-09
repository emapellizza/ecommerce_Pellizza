import React,{useState,useEffect} from "react"
import ItemDetail from './ItemDetail'
import  MockProducts from "../../../Utils/MockProducts"



function ItemDetailContainer (){

    const[dataProduct,setProduct]=useState({})



    const getProducts =()=>{
        return new Promise((resolve,reject)=>{
            setTimeout (()=>{
                return resolve(MockProducts)
            },2000)

         })
    }
    
    useEffect( () => {
        getProducts().then( (product) => {
            setProduct(product)
        })
    },[])
    
        return(
 
       <div className="Container-ItemDetail">

           <ItemDetail data = {dataProduct} />      

            </div>    
        )
}

export default ItemDetailContainer;
