import React from 'react'
import './Navbar.css'

function Navbar() {

    const menuToggle = () => {
        const menu = document.getElementById('navbarNav');
        const contenedor = document.getElementById('navContenedor');
        const navItem1 = document.getElementById('navItem1');
        const navItem2 = document.getElementById('navItem2');
        const navItem3 = document.getElementById('navItem3');
        contenedor.classList.toggle('opened');

        if (contenedor.classList.contains('opened')) {
            setTimeout(function () {
                navItem1.classList.toggle('opened');
                navItem2.classList.toggle('opened');
                navItem3.classList.toggle('opened');
                menu.classList.toggle('active');
            }, 200);
        } else {
            navItem1.classList.toggle('opened');
            navItem2.classList.toggle('opened');
            navItem3.classList.toggle('opened');
            menu.classList.toggle('active');
        }
    }

    return (
        <div className='navbar' id="navContenedor">
            <div className="navbar__contenedor">
                <div className="navbar__contenedor__bloque-1">
                    <a className="navbar-marca" href="#">IF NOX</a>
                    {/* <img className='switch' src="images/Toggle.webp" alt="" /> */}
                    {/* <div className='llamada'> */}
                        {/* <h5>Cambiá al modo oscuro</h5> */}
                    {/* </div> */}
                </div>
                <div className="menu-toggle" id="menuToggle" onClick={menuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="navbar__contenedor__bloque-2" id="navbarNav">
                    <div className="nav-item-1" id='navItem1'>
                        <a className="nav-link" href="#planes">Planes</a>
                    </div>
                    <div className="nav-item-2" id='navItem2'>
                        <a className="nav-link" href="#nosotros">Nosotros</a>
                    </div>
                    <div className="nav-item-3" id='navItem3'>
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar