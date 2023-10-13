import React from 'react'
import ComponenteObservador  from '../ComponenteObservador.jsx';
import './Asi_trabajamos.css'

function Asi_trabajamos() {

    const [elementoRef, isIntersecting] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });

    const animarDiv = () => {
        const procesoElemento1 = document.querySelector('.proceso__elemento-1');
        procesoElemento1.classList.toggle('animado');
        const procesoTexto1 = document.querySelector('.proceso__elemento-1__texto');
        procesoTexto1.classList.toggle('visible')
    } 

    const animarDiv2 = () => {
        const procesoElemento2 = document.querySelector('.proceso__elemento-2');
        procesoElemento2.classList.toggle('animado');
        const procesoTexto2 = document.querySelector('.proceso__elemento-2__texto');
        procesoTexto2.classList.toggle('visible')
    }

    const animarDiv3 = () => {
        const procesoElemento3 = document.querySelector('.proceso__elemento-3');
        procesoElemento3.classList.toggle('animado');
        const procesoTexto3 = document.querySelector('.proceso__elemento-3__texto');
        procesoTexto3.classList.toggle('visible')
    }

    const animarDiv4 = () => {
        const procesoElemento4 = document.querySelector('.proceso__elemento-4');
        procesoElemento4.classList.toggle('animado');
        const procesoTexto = document.querySelector('.proceso__elemento-4__texto');
        procesoTexto.classList.toggle('visible')
    }

    const animarDiv5 = () => {
        const procesoElemento5 = document.querySelector('.proceso__elemento-5');
        procesoElemento5.classList.toggle('animado');
        const procesoTexto = document.querySelector('.proceso__elemento-5__texto');
        procesoTexto.classList.toggle('visible')
    }

    const animarDiv6 = () => {
        const procesoElemento6 = document.querySelector('.proceso__elemento-6');
        procesoElemento6.classList.toggle('animado-2');
        const procesoTexto = document.querySelector('.proceso__elemento-6__texto');
        procesoTexto.classList.toggle('visible')
    }

    const animar1 = () => {
        const elemento1 = document.querySelector('.elemento-1');
        elemento1.classList.toggle('animado');
        const texto1 = document.querySelector('.elemento-1__texto');
        texto1.classList.toggle('visible')
    }

    const animar2 = () => {
        const elemento2 = document.querySelector('.elemento-2');
        elemento2.classList.toggle('animado');
        const texto2 = document.querySelector('.elemento-2__texto');
        texto2.classList.toggle('visible')
    }

    const animar3 = () => {
        const elemento3 = document.querySelector('.elemento-3');
        elemento3.classList.toggle('animado');
        const texto3 = document.querySelector('.elemento-3__texto');
        texto3.classList.toggle('visible')
    }

    const animar4 = () => {
        const elemento4 = document.querySelector('.elemento-4');
        elemento4.classList.toggle('animado');
        const texto = document.querySelector('.elemento-4__texto');
        texto.classList.toggle('visible')
    }

    const animar5 = () => {
        const elemento5 = document.querySelector('.elemento-5');
        elemento5.classList.toggle('animado');
        const texto = document.querySelector('.elemento-5__texto');
        texto.classList.toggle('visible')
    }

    const animar6 = () => {
        const elemento6 = document.querySelector('.elemento-6');
        elemento6.classList.toggle('animado-2');
        const texto = document.querySelector('.elemento-6__texto');
        texto.classList.toggle('visible')
    }
    
    return (
        <div className='asi-trabajamos'>
            <div className="asi-trabajamos__contenedor">
                <h1 className='asi-trabajamos__titulo'>Así trabajamos</h1>
                <img id= "id1" onClick={animarDiv} className='icono__icono-1' src="/images/cubo.svg" alt="" />
                <img id="id2" onClick={animarDiv2} className='icono__icono-2' src="/images/maletin.svg" alt="" />
                <img id="id3" onClick={animarDiv3} className='icono__icono-3' src="/images/etiqueta.svg" alt="" />
                <img id="id4" onClick={animarDiv4} className='icono__icono-4' src="/images/cubo2.svg" alt="" />
                <img id="id5" onClick={animarDiv5} className='icono__icono-5' src="/images/chip.svg" alt="" />
                <img id="id6" onClick={animarDiv6} className='icono__icono-6' src="/images/corazon.svg" alt="" />
                <img className='laberinto' src="/images/laberinto.webp" alt="" />
                <div className="presentacion" >
                    <div ref={elementoRef} className={`proceso__elemento-1 ${isIntersecting ? 'animado' : '' }`}  >
                        <div className="proceso__elemento-1__texto">
                            <h3 className='proceso__elemento-1__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-1__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-1__texto__item'>Procesos</p>
                            <p className='proceso__elemento-1__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>
                <div className="registro">
                    <div onClick={animarDiv2} className="proceso__elemento-2">
                        <div className="proceso__elemento-2__texto">
                            <h3 className='proceso__elemento-2__texto__titulo'>Registro de Reuniones:</h3>
                            <p className='proceso__elemento-2__texto__item'>Preguntas</p>
                            <p className='proceso__elemento-2__texto__item'>Compromisos del Cliente</p>
                            <p className='proceso__elemento-2__texto__item'>Brief</p>
                        </div>
                    </div>
                </div>
                <div className="compromisos">
                    <div onClick={animarDiv3} className="proceso__elemento-3">
                        <div className="proceso__elemento-3__texto">
                            <h3 className='proceso__elemento-3__texto__titulo'>Compromisos If Nox:</h3>
                            <p className='proceso__elemento-3__texto__item'>Timeline</p>
                            <p className='proceso__elemento-3__texto__item'>Mapa de Navegación</p>
                        </div>
                    </div>
                </div>
                <div className="implementacion">
                    <div onClick={animarDiv4} className="proceso__elemento-4">
                        <div className="proceso__elemento-4__texto">
                            <h3 className='proceso__elemento-4__texto__titulo'>Implementación:</h3>
                            <div className="bloques">
                                <div className="bloque-1">
                                    <p className='proceso__elemento-4__texto__item'>Diseño UX/UI</p>
                                    <p className='proceso__elemento-4__texto__item'>Desarrollo</p>
                                </div>
                                <div className="bloque-2">
                                    <p className='proceso__elemento-4__texto__item'>Progreso</p>
                                    <p className='proceso__elemento-4__texto__item'>Meeting record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qa">
                    <div onClick={animarDiv5} className="proceso__elemento-5">
                        <div className="proceso__elemento-5__texto">
                            <h3 className='proceso__elemento-5__texto__titulo'>QA Cliente:</h3>
                            <p className='proceso__elemento-5__texto__item'>Documentación QA Cliente</p>
                            <p className='proceso__elemento-5__texto__item'>Estabilización</p>
                        </div>
                    </div>
                </div>
                <div className="entrega">
                    <div onClick={animarDiv6} className="proceso__elemento-6">
                        <div className="proceso__elemento-6__texto">
                            <h3 className='proceso__elemento-6__texto__titulo'>Entrega Final:</h3>
                            <p className='proceso__elemento-6__texto__item'>Acta de Entrega y Conformidad</p>
                            <p className='proceso__elemento-6__texto__item'>Manual de Administración</p>
                            <p className='proceso__elemento-6__texto__item'>Encuesta de Satisfacción</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="asi-trabajamos__contenedor-2">
                <h1 className='titulo'>Así <br /> trabajamos</h1>
                <img className='laberinto-2' src="/images/laberinto-mobile.svg" alt="" />
                <div className="presentacion-2">
                    <div onClick={animar1} className="elemento-1">
                        <div className="elemento-1__texto">
                            <h3 className='elemento-1__texto__titulo'>Presentación:</h3>
                            <p className='elemento-1__texto__item'>Equipo de trabajo</p>
                            <p className='elemento-1__texto__item'>Procesos</p>
                            <p className='elemento-1__texto__item'>Herramientas</p>
                        </div>
                        <img onClick={animar1} className='icono-1' src="/images/cubo.svg" alt="" />
                    </div>
                </div>
                <div className="registro-2">
                    <div onClick={animar2} className="elemento-2">
                        <img onClick={animar2} className='icono-2' src="/images/maletin.svg" alt="" />

                        <div className="elemento-2__texto">
                            <h3 className='elemento-2__texto__titulo'>Registro de Reuniones:</h3>
                            <p className='elemento-2__texto__item'>Preguntas</p>
                            <p className='elemento-2__texto__item'>Compromisos del Cliente</p>
                            <p className='elemento-2__texto__item'>Brief</p>
                        </div>
                    </div>
                </div>
                <div className="compromisos-2">
                    <div onClick={animar3} className="elemento-3">

                        <div className="elemento-3__texto">
                            <h3 className='elemento-3__texto__titulo'>Compromisos If Nox:</h3>
                            <p className='elemento-3__texto__item'>Timeline</p>
                            <p className='elemento-3__texto__item'>Mapa de Navegación</p>
                        </div>
                        <img onClick={animar3} className='icono-3' src="/images/etiqueta.svg" alt="" />
                    </div>
                </div>
                <div className="implementacion-2">
                    <div onClick={animar4} className="elemento-4">
                        <img onClick={animar4} className='icono-4' src="/images/cubo2.svg" alt="" />

                        <div className="elemento-4__texto">
                            <h3 className='elemento-4__texto__titulo'>Implementación:</h3>
                            <div className="bloques">
                                <div className="bloque-1">
                                    <p className='elemento-4__texto__item'>Diseño UX/UI</p>
                                    <p className='elemento-4__texto__item'>Desarrollo</p>
                                </div>
                                <div className="bloque-2">
                                    <p className='elemento-4__texto__item'>Progreso</p>
                                    <p className='elemento-4__texto__item'>Meeting record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qa-2">
                    <div onClick={animar5} className="elemento-5">

                        <div className="elemento-5__texto">
                            <h3 className='elemento-5__texto__titulo'>QA Cliente:</h3>
                            <p className='elemento-5__texto__item'>Documentación QA Cliente</p>
                            <p className='elemento-5__texto__item'>Estabilización</p>
                        </div>
                        <img onClick={animar5} className='icono-5' src="/images/chip.svg" alt="" />
                    </div>
                </div>
                <div className="entrega-2">
                    <div onClick={animar6} className="elemento-6">
                        <img onClick={animar6} className='icono-6' src="/images/corazon.svg" alt="" />

                        <div className="elemento-6__texto">
                            <h3 className='elemento-6__texto__titulo'>Entrega Final:</h3>
                            <p className='elemento-6__texto__item'>Acta de Entrega y Conformidad</p>
                            <p className='elemento-6__texto__item'>Manual de Administración</p>
                            <p className='elemento-6__texto__item'>Encuesta de Satisfacción</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Asi_trabajamos 