import React from 'react'
import './Proy_dest.css'

function Proy_dest() {
    return (
        <div className='proy-dest'>
            <div className="proy-dest__cont">
                <div className="proy-dest__contenedor">
                    <h1 className='proy-dest__contenedor__titulo'>Proyectos Destacados</h1>
                    <p className='proy-dest__contenedor__frase'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quod, autem illo velit excepturi nulla eius!</p>
                </div>
                <div className="grilla">
                    <div className="grilla__contenedor">
                        <div className='grilla__contenedor_1_bloque-a'>
                            <div className="grilla__contenedor_1_bloque-a-1">
                                <img className='imagen-1' src="/images/percubateristas.png" alt="" />
                                <div className='grilla__contenedor_1_bloque-a-1-1'>
                                    <img className='imagen-2' src="/images/imagen-4.png" alt="" />
                                    <img className='imagen-3' src="/images/imagen-3.png" alt="" />
                                </div>
                            </div>
                            <div className='grilla__contenedor_1_bloque-a-2'>
                                <img className='imagen-4' src="/images/imagen-2.png" alt="" />
                                <img className='imagen-5' src="/images/imagen-5.png" alt="" />
                            </div>
                        </div>
                        <div className='grilla__contenedor_1_bloque-b'>
                            <img className='imagen-6' src="/images/imagen-6.png" alt="" />
                            <img className='imagen-7' src="/images/imagen-7.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Proy_dest