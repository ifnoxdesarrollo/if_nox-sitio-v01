import React from 'react'
import './Nos_presentamos.css';
// import './Nos_presentamos.js';

function Nos_presentamos() {
    return (
        <div className='nosotros' id='nosotros'>
            <div className="nosotros__contenedor">
                <div className="nosotros__contenedor__imagen-grande">
                    <h2 className='contenedor-imagen-1__nombre'>Olima Pablo</h2>
                    <h3 className='contenedor-imagen-1__puesto'>Director Creativo</h3>
                    <img id='nosotros1' className='nosotros__contenedor__imagen-grande__imagen' src="images/pablo_x2.png" alt="Pablo Olima" />
                    {/* <div className='imagen-texto'>
                        <h3 className='imagen-texto__nombre'>Pablo Olima</h3>
                        <p className='imagen-texto__puesto'>Director Creativo</p>
                    </div> */}
                </div>
                <div className="nosotros__contenedor__imagenes-chicas">
                    <div className="nosotros__contenedor__imagenes-chicas__texto">
                        <h2 className="nosotros__contenedor__imagenes-chicas__texto__titulo">Nos presentamos</h2>
                        <h3 className="nosotros__contenedor__imagenes-chicas__texto__subtitulo">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
                    </div>
                    <div className="nosotros__contenedor__imagenes-chicas__imagenes">
                        <div className="contenedor-imagen-1">
                            <img id='nosotros2' className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-1' src="images/juli_normal.png" alt="Julieta Sosa" />
                        </div>
                        <div className="contenedor-imagen-2">
                            <img id='nosotros3' className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-3' src="images/agus_normal.png" alt="Agustín Sosa" />
                            <img id='nosotros4' className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-4' src="images/eva_normal.png" alt="Evaristo Aguirre" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nos_presentamos