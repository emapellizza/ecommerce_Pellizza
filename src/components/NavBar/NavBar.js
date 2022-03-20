import React from 'react';
import Cart from './CartWidget'

import "./NavBar.css"


function NavBar() {
    return(
        <header className="main-header">
           <div className="container-logo">
               <img src="/public/Img/LogoRents.png" className="img-headerLogo"/>
               </div>
            
            <div>   
            <ul className="Navbar">
                <li><button>Home</button></li>
                <li><button>Menu</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            </div>

            <div>
                <Cart/>
            </div>
            </header>
        )
}

export default  NavBar;