import React from 'react';
import Cart from './CartWidget'
import "./NavBar.css"
import LogoRents from "../../Img/LogoRents.png"


function NavBar() {
    return(
        <div className='NavBar-div'>

           <div className='Logo'>
               <img src={LogoRents} alt="logo"/>
            </div>
            
          <div className='NavBar-buttons' >
              
              <button>Home</button> 
              <button>Mi Perfil</button> 
              <button>Nosotros</button> 
              <button>Contactos</button> 

          </div>
  
            <div >
                <Cart/>
            </div>
            
        </div>
        )
}

export default  NavBar;