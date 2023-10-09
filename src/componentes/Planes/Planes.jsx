import React from 'react'
import './Planes.css';
import 'swiper/css';
import { PlanCard } from './PlanCard';

function Planes() {


    return (
        <div className='planes' id='planes'>
            <div className="planes__contenedor">
                <div className="planes__contenedor__texto">
                    <h2 className='planes__contenedor__texto__titulo'>Elegí el plan perfecto <br />para ti</h2>
                    <h3 className='planes__contenedor__texto__subtitulo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam non obcaecati minus provident distinctio ipsa officia vel maiores.</h3>
                </div>
                <div className="planes__contenedor__cards">
                    <PlanCard></PlanCard>
                </div>
            </div>

        </div>
    )
}

export default Planes