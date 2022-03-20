import React from 'react'
import "./Items.css"

class Cards extends React.Component {
    render(){
        return(

         <div className="container-Cards">
                {this.props.title}
                {this.props.price}
                {this.props.type}
            </div>
        )
    }

}

export default Cards;