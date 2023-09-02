import React from 'react'
import './Nos_presentamos.css';

function Nos_presentamos() {
    return (
        <div className='nosotros'>
            <div className="nosotros__contenedor">
                <div className="nosotros__contenedor__imagen-grande">
                    <img className='nosotros__contenedor__imagen-grande__imagen' src="images/Pablo-olima.png" alt="" />
                </div>
                <div className="nosotros__contenedor__imagenes-chicas">
                    <div className="nosotros__contenedor__imagenes-chicas__texto">
                        <h2 className="nosotros__contenedor__imagenes-chicas__texto__titulo">Nos presentamos</h2>
                        <h3 className="nosotros__contenedor__imagenes-chicas__texto__subtitulo">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
                    </div>
                    <div className="nosotros__contenedor__imagenes-chicas__imagenes">
                        <div className="contenedor-imagen-1">
                            <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-1' src="images/Julieta-sosa.png" alt="" />
                            <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-2' src="images/Evaristo-aguirre.png" alt="" />
                        </div>
                        <div className="contenedor-imagen-2">
                            <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-3' src="images/Agustin-sosa.png" alt="" />
                            <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-4' src="images/Agustin-sosa.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nos_presentamos