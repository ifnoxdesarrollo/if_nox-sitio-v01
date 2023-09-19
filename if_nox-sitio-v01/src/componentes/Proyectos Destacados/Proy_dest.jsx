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
                                <div className="imagen-1">
                                    <img className='imagen-1' src="/images/sinfin-hostel.png" alt="" />
                                </div>
                                <div className='grilla__contenedor_1_bloque-a-1-1'>
                                    <div className="imagen-2">
                                        <img className='imagen-2' src="/images/siectes.png" alt="" />
                                    </div>
                                    <div className="imagen-3">
                                        <img className='imagen-3' src="/images/panettone.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='grilla__contenedor_1_bloque-a-2'>
                                <div className="imagen-4">
                                    <img className='imagen-4' src="/images/consultorio-maipu.png" alt="" />
                                </div>
                                <div className="imagen-5">
                                    <img className='imagen-5-img' src="/images/cas-mendoza.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='grilla__contenedor_1_bloque-b'>
                            <div className="imagen-6">
                                <img className='imagen-6-img' src="/images/percubateristas (2).png" alt="" />
                            </div>
                            <div className="imagen-7">
                                <img className='imagen-7' src="/images/philadelphia.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Proy_dest