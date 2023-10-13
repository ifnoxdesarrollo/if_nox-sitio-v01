import React from 'react'
import ComponenteObservador  from '../ComponenteObservador.jsx';
import './Asi_trabajamos.css'

function Asi_trabajamos() {

    const [elementoRef, isIntersecting] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef2, isIntersecting2] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef3, isIntersecting3] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef4, isIntersecting4] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef5, isIntersecting5] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef6, isIntersecting6] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef_a, isIntersecting_a] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef_2, isIntersecting_2] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef_3, isIntersecting_3] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef_4, isIntersecting_4] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef_5, isIntersecting_5] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    const [elementoRef_6, isIntersecting_6] = ComponenteObservador ({
        rootMargin: "-40% 0px -60% 0px",
    });
    
    return (
        <div className='asi-trabajamos'>
            <div className="asi-trabajamos__contenedor">
                <h1 className='asi-trabajamos__titulo'>Así trabajamos</h1>
                <img id= "id1" className='icono__icono-1' src="/images/cubo.svg" alt="" />
                <img id="id2"  className='icono__icono-2' src="/images/maletin.svg" alt="" />
                <img id="id3"  className='icono__icono-3' src="/images/etiqueta.svg" alt="" />
                <img id="id4"  className='icono__icono-4' src="/images/cubo2.svg" alt="" />
                <img id="id5"  className='icono__icono-5' src="/images/chip.svg" alt="" />
                <img id="id6"  className='icono__icono-6' src="/images/corazon.svg" alt="" />
                <img className='laberinto' src="/images/laberinto.webp" alt="" />
                <div className="presentacion" >
                    <div ref={elementoRef} className={`proceso__elemento-1 ${isIntersecting ? 'animado' : '' }`}  >
                        <div className={`proceso__elemento-1__texto ${isIntersecting ? 'visible' : '' }`}>
                            <h3 className='proceso__elemento-1__texto__titulo'>Presentación:</h3>
                            <p className='proceso__elemento-1__texto__item'>Equipo de trabajo</p>
                            <p className='proceso__elemento-1__texto__item'>Procesos</p>
                            <p className='proceso__elemento-1__texto__item'>Herramientas</p>
                        </div>
                    </div>
                </div>
                <div className="registro">
                    <div ref={elementoRef2} className={`proceso__elemento-2 ${isIntersecting2 ? 'animado' : '' }`}>
                        <div className={`proceso__elemento-2__texto ${isIntersecting2 ? 'visible' : '' }`}>
                            <h3 className='proceso__elemento-2__texto__titulo'>Registro de Reuniones:</h3>
                            <p className='proceso__elemento-2__texto__item'>Preguntas</p>
                            <p className='proceso__elemento-2__texto__item'>Compromisos del Cliente</p>
                            <p className='proceso__elemento-2__texto__item'>Brief</p>
                        </div>
                    </div>
                </div>
                <div className="compromisos">
                    <div ref={elementoRef3} className={`proceso__elemento-3 ${isIntersecting3 ? 'animado' : '' }`}>
                        <div className={`proceso__elemento-3__texto ${isIntersecting3 ? 'visible' : '' }`}>
                            <h3 className='proceso__elemento-3__texto__titulo'>Compromisos If Nox:</h3>
                            <p className='proceso__elemento-3__texto__item'>Timeline</p>
                            <p className='proceso__elemento-3__texto__item'>Mapa de Navegación</p>
                        </div>
                    </div>
                </div>
                <div className="implementacion">
                    <div ref={elementoRef4} className={`proceso__elemento-4 ${isIntersecting4 ? 'animado' : '' }`}>
                        <div className={`proceso__elemento-4__texto ${isIntersecting4 ? 'visible' : '' }`}>
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
                    <div ref={elementoRef5} className={`proceso__elemento-5 ${isIntersecting5 ? 'animado' : '' }`}>
                        <div className={`proceso__elemento-5__texto ${isIntersecting5 ? 'visible' : '' }`}>
                            <h3 className='proceso__elemento-5__texto__titulo'>QA Cliente:</h3>
                            <p className='proceso__elemento-5__texto__item'>Documentación QA Cliente</p>
                            <p className='proceso__elemento-5__texto__item'>Estabilización</p>
                        </div>
                    </div>
                </div>
                <div className="entrega">
                    <div ref={elementoRef6} className={`proceso__elemento-6 ${isIntersecting6 ? 'animado' : '' }`}>
                        <div className={`proceso__elemento-6__texto ${isIntersecting6 ? 'visible' : '' }`}>
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
                <div ref={elementoRef_a} className={`elemento-1 ${isIntersecting_a ? 'animado' : '' }`}  >
                        <div className={`elemento-1__texto ${isIntersecting_a ? 'visible' : '' }`}>
                            <h3 className='elemento-1__texto__titulo'>Presentación:</h3>
                            <p className='elemento-1__texto__item'>Equipo de trabajo</p>
                            <p className='elemento-1__texto__item'>Procesos</p>
                            <p className='elemento-1__texto__item'>Herramientas</p>
                        </div>
                        <img className='icono-1' src="/images/cubo.svg" alt="" />
                    </div>
                </div>
                <div className="registro-2">
                <div ref={elementoRef_2} className={`elemento-2 ${isIntersecting_2 ? 'animado' : '' }`}  >
                        <img className='icono-2' src="/images/maletin.svg" alt="" />

                        <div className={`elemento-2__texto ${isIntersecting_2 ? 'visible' : '' }`}>
                            <h3 className='elemento-2__texto__titulo'>Registro de Reuniones:</h3>
                            <p className='elemento-2__texto__item'>Preguntas</p>
                            <p className='elemento-2__texto__item'>Compromisos del Cliente</p>
                            <p className='elemento-2__texto__item'>Brief</p>
                        </div>
                    </div>
                </div>
                <div className="compromisos-2">
                <div ref={elementoRef_3} className={`elemento-3 ${isIntersecting_3 ? 'animado' : '' }`}  >
                        <div className={`elemento-3__texto ${isIntersecting_3 ? 'visible' : '' }`}>
                            <h3 className='elemento-3__texto__titulo'>Compromisos If Nox:</h3>
                            <p className='elemento-3__texto__item'>Timeline</p>
                            <p className='elemento-3__texto__item'>Mapa de Navegación</p>
                        </div>
                        <img className='icono-3' src="/images/etiqueta.svg" alt="" />
                    </div>
                </div>
                <div className="implementacion-2">
                <div ref={elementoRef_4} className={`elemento-4 ${isIntersecting_4 ? 'animado' : '' }`}  >
                        <img className='icono-4' src="/images/cubo2.svg" alt="" />

                        <div className={`elemento-4__texto ${isIntersecting_4 ? 'visible' : '' }`}>
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
                <div ref={elementoRef_5} className={`elemento-5 ${isIntersecting_5 ? 'animado' : '' }`}  >
                        <div className={`elemento-5__texto ${isIntersecting_5 ? 'visible' : '' }`}>
                            <h3 className='elemento-5__texto__titulo'>QA Cliente:</h3>
                            <p className='elemento-5__texto__item'>Documentación QA Cliente</p>
                            <p className='elemento-5__texto__item'>Estabilización</p>
                        </div>
                        <img className='icono-5' src="/images/chip.svg" alt="" />
                    </div>
                </div>
                <div className="entrega-2">
                <div ref={elementoRef_6} className={`elemento-6 ${isIntersecting_6 ? 'animado-2' : '' }`}  >
                        <img className='icono-6' src="/images/corazon.svg" alt="" />

                        <div className={`elemento-6__texto ${isIntersecting_6 ? 'visible' : '' }`}>
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