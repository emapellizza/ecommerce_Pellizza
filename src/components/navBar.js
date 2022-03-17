import React from 'react';


function NavBar() {
    return(
        <header className="main-header">
           <div className="container-logo">
               <img src="logo192.png" className="img-header"/>
               </div>
            <div>   
            <ul className="navbar">
                <li><button>Home</button></li>
                <li><button>Menu</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>

            </ul>
            </div>
            </header>
        )
}

export default  NavBar;