//llama a itemj.s
import React,{useState,useEffect} from "react"
import Item from "../Item/Item"
import "./ItemList.css"



function ItemList () {

    const mockProducts=[
        {
        id: 1,
        title:'House 1',
        price: 'U$D 798556',
        pictureURL:'House1.jpg'
        },

        {
        id: 2,
        title:'House 2',
        price: 'U$D 898654',
        pictureURL:'House2.jpg'
        },
        
        { 
        id: 3,
        title:'House 3',
        price: 'U$D 412321',
        pictureURL:'House3.jpg'
        },
        
        {
        id: 4,
        title:'House 4',
        price: 'U$D 123512',
        pictureURL:'House4.jpg'
        }
    ]
    const[products,setProducts]=useState([])

    const getProducts =()=>{
        return new Promise((resolve,reject)=>{
            setTimeout (()=>{
                resolve(mockProducts)
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