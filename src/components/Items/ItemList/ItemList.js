//llama a itemj.s
import React,{useState,useEffect} from "react"
import Item from "../Item/Item"
import "./ItemList.css"
import MockProducts from "../../../Utils/MockProducts.js"


function ItemList () {

   
    const[products,setProducts]=useState([])

    const getProducts =()=>{
        return new Promise((resolve,reject)=>{
            setTimeout (()=>{
               return resolve(MockProducts)
            },2000)

         })
    }
    useEffect( () => {
        getProducts().then( (data) => {
            setProducts(data)
        });
    },[])

    return(
        <div className="Item-List">
           
            {products.map( (product) =>{
                const{id}= product
                return(
                    <div key={id}>
                      <Item data={product} key={id}/>
                    </div>
                )
                
            } )

            }
            
        </div>
    )
    
}


export default ItemList;