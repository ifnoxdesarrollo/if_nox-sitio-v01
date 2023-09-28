import React from 'react'
import './Proy_dest.css'

function Proy_dest() {

    const hoverImg = (element) => {
        element.classList.add(element.id + '-hover');
    }

    const resizeImg = (element) => {
        element.classList.remove(element.id + '-hover');
    }

    const hoverImg2 = (element) => {
        element.parentElement.classList.add(element.id + '-hover');
    }

    const resizeImg2 = (element) => {
        element.parentElement.classList.remove(element.id + '-hover');
    }

    return (
        <div className='proy-dest'>
            <div className="proy-dest__cont">
                <div className="proy-dest__contenedor">
                    <h1 className='proy-dest__contenedor__titulo'>Proyectos Destacados</h1>
                    <p className='proy-dest__contenedor__frase'>Explora nuestra cartera de proyectos destacados que demuestran nuestra experiencia en desarrollo web y diseño, proporcionando soluciones efectivas.</p>
                </div>
                <div className="grilla-movil grilla-movil-visible">
                    <div className="grilla__contenedor-movil">
                        <div className="grilla__contenedor__bloque-1">
                            <img className='imagen-1-movil' src="/images/sinfin-hostel-movil.png" alt="" />
                        </div>
                        <div className="grilla__contenedor__bloque-2">
                            <div className="grilla__contenedor__bloque-2__a">
                                <img className='imagen-2-movil' src="/images/panettone-movil.png" alt="" />
                                <img className='imagen-3-movil' src="/images/cas-mendoza-movil.png" alt="" />
                            </div>
                            <div className="grilla__contenedor__bloque-2__b">
                                <img className='imagen-4-movil' src="/images/percubateristas-movil.png" alt="" />
                                <img className='imagen-5-movil' src="/images/siectes-movil.png" alt="" />
                            </div>
                        </div>
                        <div className="grilla__contenedor__bloque-3">
                            <img className='imagen-6-movil' src="/images/consultorio-movil.png" alt="" />
                            <img className='imagen-7-movil' src="/images/philadelphia-movil.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="grilla grilla-visible">
                    <div className="grilla__contenedor">
                        <div className='grilla__contenedor_1_bloque-a'>
                            <div className="grilla__contenedor_1_bloque-a-1">
                                <div className="imagen-1">
                                    <img onMouseLeave={(event) => resizeImg(event.target)}
                                        onMouseEnter={(event) => hoverImg(event.target)}
                                        id='imagen-1' className='imagen-1'
                                        src="/images/sinfin-hostel.png" alt="" />
                                </div>
                                <div className='grilla__contenedor_1_bloque-a-1-1'>
                                    <div className="imagen-2">
                                        <img onMouseLeave={(event) => resizeImg(event.target)}
                                            onMouseEnter={(event) => hoverImg(event.target)}
                                            className='imagen-2' src="/images/siectes.png"
                                            alt="" id="imagen-2" />
                                    </div>
                                    <div className="imagen-3">
                                        <img onMouseLeave={(event) => resizeImg(event.target)}
                                            onMouseEnter={(event) => hoverImg(event.target)}
                                            className='imagen-3' src="/images/panettone.png"
                                            alt="" id="imagen-3" />
                                    </div>
                                </div>
                            </div>
                            <div className='grilla__contenedor_1_bloque-a-2'>
                                <div className="imagen-4">
                                    <img
                                        onMouseLeave={(event) => resizeImg(event.target)}
                                        onMouseEnter={(event) => hoverImg(event.target)}
                                        className='imagen-4' src="/images/consultorio-maipu.png"
                                        alt="" id="imagen-4" />
                                </div>
                                <div className="imagen-5">
                                    <img
                                        onMouseLeave={(event) => resizeImg2(event.target)}
                                        onMouseEnter={(event) => hoverImg2(event.target)}
                                        id="imagen-5"
                                        className='imagen-5-img' src="/images/cas-mendoza.webp"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='grilla__contenedor_1_bloque-b'>
                            <div className="imagen-6">
                                <img
                                    onMouseLeave={(event) => resizeImg2(event.target)}
                                    onMouseEnter={(event) => hoverImg2(event.target)}
                                    id="imagen-6"
                                    className='imagen-6-img' src="/images/percubateristas (2).webp"
                                    alt="" />
                            </div>
                            <div className="imagen-7">
                                <img onMouseLeave={(event) => resizeImg(event.target)}
                                    onMouseEnter={(event) => hoverImg(event.target)}
                                    className='imagen-7' src="/images/philadelphia.png"
                                    alt="" id="imagen-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Proy_dest