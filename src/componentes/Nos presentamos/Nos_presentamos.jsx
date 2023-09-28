import React from 'react'
import './Nos_presentamos.css';
import { useState } from 'react';
// import './Nos_presentamos.js';

function Nos_presentamos() {
    const initialData = {
        name: "Olima Pablo",
        position: "Director Creativo",
        image: "images/pablo_x2.webp"
    };
    const [current, setCurrent] = useState(initialData);

    const [eva, setEva] = useState({
        name: "Evaristo Aguirre",
        position: "Desarrollador",
        image: "images/eva_x2.webp"
    });
    const [juli, setJuli] = useState({
        name: "Julieta Sosa",
        position: "Desarrolladora",
        image: "images/juli_x2.webp"
    });
    const [agus, setAgus] = useState({
        name: "Agustín Sosa",
        position: "Desarrollador",
        image: "images/agus_x2.webp"
    });

    const handleChangePerson = (person) => {
        const currentData = {
            name: current.name,
            position: current.position,
            image: current.image
        };
        setCurrent(person);
        person === juli ? setJuli(currentData) : person === eva ? setEva(currentData) : setAgus(currentData);
    }

    return (
        <div className='nosotros' id='nosotros'>
            <div className="nosotros__contenedor">
                <div className="nosotros__contenedor__imagen-grande">
                    <h2 className='contenedor-imagen-1__nombre'>{current.name}</h2>
                    <h3 className='contenedor-imagen-1__puesto'>{current.position}</h3>
                    <img id='nosotros1' className='nosotros__contenedor__imagen-grande__imagen' src={current.image} alt="Pablo Olima" />
                    {/* <div className='imagen-texto'>
                        <h3 className='imagen-texto__nombre'>Pablo Olima</h3>
                        <p className='imagen-texto__puesto'>Director Creativo</p>
                    </div> */}
                </div>
                <div className="nosotros__contenedor__imagenes-chicas">
                    <div className="nosotros__contenedor__imagenes-chicas__texto">
                        <h2 className="nosotros__contenedor__imagenes-chicas__texto__titulo">Nos presentamos</h2>
                        <h3 className="nosotros__contenedor__imagenes-chicas__texto__subtitulo">Somos un equipo apasionado de desarrolladores web y diseñadores comprometidos con crear experiencias digitales impactantes y efectivas para tu negocio.</h3>
                    </div>
                    <div className="nosotros__contenedor__imagenes-chicas__imagenes">
                        <div className="contenedor-imagen-1">
                            <img onClick={() => handleChangePerson(juli)} id='nosotros2' className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-1' src={juli.image} alt="Julieta Sosa" />
                        </div>
                        <div className="contenedor-imagen-2">
                            <img onClick={() => handleChangePerson(agus)} id='nosotros3' className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-3' src={agus.image} alt="Agustín Sosa" />
                            <img onClick={() => handleChangePerson(eva)} id='nosotros4' className='nosotros__contenedor__imagenes-chicas__imagenes__imagen-4' src={eva.image} alt="Evaristo Aguirre" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nos_presentamos