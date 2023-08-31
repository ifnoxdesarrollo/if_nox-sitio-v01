import React from 'react'

function Nos_presentamos() {
    return (
        <div className='nosotros'>
            <div className="nosotros__contenedor">
                <div className="nosotros__contenedor__imagen-grande">
                    <img className='nosotros__contenedor__imagen-grande__imagen' src="" alt="" />
                </div>
                <div className="nosotros__contenedor__imagenes-chicas">
                    <div className="nosotros__contenedor__imagenes-chicas__texto">
                        <h2 className="nosotros__contenedor__imagenes-chicas__texto__titulo"></h2>
                        <h3 className="nosotros__contenedor__imagenes-chicas__texto__subtitulo"></h3>
                    </div>
                    <div className="nosotros__contenedor__imagenes-chicas__imagenes">
                        <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-1' src="" alt="" />
                        <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-2' src="" alt="" />
                        <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-3' src="" alt="" />
                        <img className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-4' src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nos_presentamos