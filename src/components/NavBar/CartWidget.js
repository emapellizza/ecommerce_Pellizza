import React from 'react';
import "./NavBar.css"
import CartWidget from "../../Img/Widgets/cart.png"

function Cart (){
    
        return(

         <div className="CartWidget">
            <img src={CartWidget} alt="CartWidget"/>
        </div>
        )
}

export default Cart;