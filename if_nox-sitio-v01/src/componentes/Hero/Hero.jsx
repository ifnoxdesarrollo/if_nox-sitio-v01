import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className='hero'>
            <div className='contenedor'>
                <img className='contenedor__logo' src="/images/IF-NOX.png" alt="" />
                <h1 className='contenedor__titulo'>Crecemos Juntos</h1>
                <p className='contenedor__frase'>Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Dolor labore mollitia laborum 
                    amet maxime quos ratione omnis, 
                    enim minus!</p>
            </div>
        </div>
    )
}

export default Hero