import CartWidget from "../Cart/CartWidget"

function Cart (){
    
    return(
       
     <div className="CartWidget-img">
        <h1 style={{textAling :'center', padding:"25%"}}>Cart</h1>
        <CartWidget/>
    </div>
    )
}

export default Cart;

