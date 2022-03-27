//import { Button, Container, AppBar } from '@mui/material';
import React from 'react';
import Cart from './CartWidget'
import "./NavBar.css"


function NavBar() {
    return(
        <header >
           <div className='NavBar-div'>
               <img src="/public/Img/LogoRents.png" className="NavBarLogo" alt=""/>
               </div>
   
            
          <div className='NavBar-button'>
              
              <button>Home</button> 
              <button>Mi Perfil</button> 
              <button>Nosotros</button> 
              <button>Contactos</button> 

          </div>
  
            <div>
                <Cart/>
            </div>
            </header>
        )
}

export default  NavBar;