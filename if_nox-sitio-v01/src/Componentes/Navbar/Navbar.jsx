import React from 'react'
import './Navbar.css'

function Navbar() {

    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    });

    return (
        <div className='navbar'>
            <div className="navbar__contenedor">
                <div className="navbar__contenedor__bloque-1">
                    <a className="navbar-marca" href="#">IF NOX</a>
                    <img className='switch' src="images/Toggle.png" alt="" />
                    <div className='llamada'>
                        <h5>Cambiá al modo oscuro</h5>
                    </div>
                </div>
                <div class="menu-toggle" id="menuToggle">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <div className="navbar__contenedor__bloque-2" id="navbarNav">

                    <div className="nav-item-1">
                        <a className="nav-link" href="#planes">Planes</a>
                    </div>
                    <div className="nav-item-2">
                        <a className="nav-link" href="#nosotros">Nosotros</a>
                    </div>
                    <div className="nav-item-3">
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar