import React from 'react'
import Cards from './Cards'
import "./Items.css"

class ItemList extends React.Component {
    render(){
        return(
    <body>
       <div className="ItemList">

            <Cards title = "Casita 1" price="U$D 823.400" type="Venta"/>
            <Cards title = "Casita 2" price="U$D 710.500" type="Venta"/>
            <Cards title = "Casita 3" price="U$D 548.600" type="Venta"/>
            <Cards title = "Casita 4" price="U$D 800" type="Alquiler"/>
            </div>    
    </body>
        
        )
    }

}

export default ItemList;