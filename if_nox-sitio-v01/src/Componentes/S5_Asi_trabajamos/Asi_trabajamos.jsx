import React from 'react'
import './Asi_trabajamos.css'

function Asi_trabajamos() {

    const animarDiv = () => {
        const procesoElemento1 = document.querySelector('.proceso__elemento-1');
        procesoElemento1.classList.toggle('animado');
        const procesoTexto = document.querySelector('.proceso__elemento-1__texto');
        procesoTexto.classList.toggle('visible')
    }

    const animarDiv2 = () => {
        const procesoElemento2 = document.querySelector('.proceso__elemento-2');
        procesoElemento2.classList.toggle('animado');
        const procesoTexto = document.querySelector('.proceso__elemento-2__texto');
        procesoTexto.classList.toggle('visible')
    }

    const animarDiv3 = () => {
        const procesoElemento3 = document.querySelector('.proceso__elemento-3');
        procesoElemento3.classList.toggle('animado');
        const procesoTexto = document.querySelector('.proceso__elemento-3__texto');
        procesoTexto.classList.toggle('visible')
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
        procesoElemento6.classList.toggle('animado');
        const procesoTexto = document.querySelector('.proceso__elemento-6__texto');
        procesoTexto.classList.toggle('visible')
    }

    return (
        <div className='asi-trabajamos'>
            <div className="asi-trabajamos__contenedor">
                <h1 className='asi-trabajamos__titulo'>Así trabajamos</h1>
                <img onClick={animarDiv} className='icono__icono-1' src="/images/cubo.svg" alt="" />
                <img onClick={animarDiv2} className='icono__icono-2' src="/images/maletin.svg" alt="" />
                {/* <img onClick={animarDiv} className='icono__icono' src="/images/cubo.svg" alt="" />
                <img onClick={animarDiv} className='icono__icono' src="/images/cubo.svg" alt="" />
                <img onClick={animarDiv} className='icono__icono' src="/images/cubo.svg" alt="" />
                <img onClick={animarDiv} className='icono__icono' src="/images/cubo.svg" alt="" /> */}
                <img className='laberinto' src="/images/laberinto.png" alt="" />
                <div className="presentacion">
                    <div onClick={animarDiv} className="proceso__elemento-1">
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
                            <h3 className='proceso__elemento-2__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-2__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-2__texto__item'>Procesos</p>
                            <p className='proceso__elemento-2__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>
                <div className="compromisos">
                    <div onClick={animarDiv3} className="proceso__elemento-3">
                        <div className="proceso__elemento-3__texto">
                            <h3 className='proceso__elemento-3__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-3__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-3__texto__item'>Procesos</p>
                            <p className='proceso__elemento-3__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>
                <div className="implementacion">
                    <div onClick={animarDiv4} className="proceso__elemento-4">
                        <div className="proceso__elemento-4__texto">
                            <h3 className='proceso__elemento-4__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-4__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-4__texto__item'>Procesos</p>
                            <p className='proceso__elemento-4__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>
                <div className="qa">
                    <div onClick={animarDiv5} className="proceso__elemento-5">
                        <div className="proceso__elemento-5__texto">
                            <h3 className='proceso__elemento-5__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-5__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-5__texto__item'>Procesos</p>
                            <p className='proceso__elemento-5__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>
                <div className="entrega">
                    <div onClick={animarDiv6} className="proceso__elemento-6">
                        <div className="proceso__elemento-6__texto">
                            <h3 className='proceso__elemento-6__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-6__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-6__texto__item'>Procesos</p>
                            <p className='proceso__elemento-6__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Asi_trabajamos