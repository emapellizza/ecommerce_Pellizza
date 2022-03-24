import React from 'react'
import "./Items.css"
import ItemCount from "./ItemCount"

class Cards extends React.Component {
    render(){
        return(

         <div className="container-Cards">
                {this.props.title}
                {this.props.price}
                {this.props.type}
                <ItemCount/>
            </div>
        )
    }

}

export default Cards;