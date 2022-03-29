//import { Button, Container, AppBar } from '@mui/material';
import React from 'react';
import Cart from './CartWidget'
import "./NavBar.css"


function NavBar() {
    return(
        <div className='NavBar-div'>
           <div className='NavBar-img'>
               <img src="/public/Img/LogoRents.png"  alt="LogoRents"/>
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