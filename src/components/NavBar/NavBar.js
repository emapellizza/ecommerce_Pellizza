import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import CartWidget from '../Cart/CartWidget'

//import LogoRents from "../../Img/LogoRents.png"


function NavBar() {
    return(
        <div className='NavBar-div'>

           <div className='Logo'>
               <img src="ruta" alt="logo"/>
            </div>
            
            <div className='button-container'>
                    <div className='NavBar-buttons' >
                        <Link to={'/'}>Home</Link>
                    </div>

                    <div className='NavBar-buttons' > 
                        <Link to={'/profile'}>Mi Perfil</Link> 
                    </div>

                    <div className='NavBar-buttons' > 
                        <Link to={'/us'}>Nosotros</Link> 
                    </div>

                    <div className='NavBar-buttons' > 
                        <Link to={'/contact'}>Contactos</Link> 
                    </div>

                    <div className='NavBar-buttons' >
                        <Link to={'/cart'}>Carrito</Link>
                    </div>
              
                </div>
                
            <div >
                <CartWidget/>
            </div>
            
        </div>
        )
}

export default  NavBar;