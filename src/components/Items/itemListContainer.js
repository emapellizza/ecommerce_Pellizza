import React from 'react'
import Cards from './Cards'
import "./Items.css"



class ItemList extends React.Component {
    render(){
        return(
    <body>
       <div className="Container-ItemList">

            <Cards title = "Casita 1" price="U$D 823.400" type="Venta" img="/public/Img/House/House1.jpg"/>
            <Cards title = "Casita 2" price="U$D 710.500" type="Venta"img="/public/Img/House/House2.jpg"/>
            <Cards title = "Casita 3" price="U$D 548.600" type="Venta"img="/public/Img/House/House3.jpg"/>
            <Cards title = "Casita 4" price="U$D 800" type="Alquiler"img="/public/Img/House/House4.jpg"/>
            
            </div>    
    </body>
        
        )
    }

}

export default ItemList;