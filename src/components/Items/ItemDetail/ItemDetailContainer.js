import React from 'react'
import ItemDetail from './ItemDetail'
import "./ItemDetail"


function ItemDetailContainer (){

    const detailMock = [{
        id: 1,
        title:'House 1',
        price: 'U$D 798556',
        Detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque. Sapiente necessitatibus rerum quia tempora dignissimos fuga, debitis, magnam at repudiandae quibusdam reprehenderit quos incidunt doloribus id cum quae consectetur!",
        pictureURL:'House1.jpg'

        },
        {

        },
        {
            
    }]
    
        return(
 
       <div className="Container-ItemDetail">

           <ItemDetail/>      

            </div>    
   
        
        )
    
}

export default ItemDetailContainer;