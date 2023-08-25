import React from 'react'
import './Nuestros_Servicios.css';

function Nuestros_Servicios() {
  return (
    <div className='servicios'>
      <div className="servicios__encabezado">
        <h1 className='titulo'>
          Nuestros Servicios
        </h1>
        <p className='parrafo'>
          Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
      </div>
      <div className="servicios__cards">
        <div className="card">
          <img className='card__img' src='./images/servicio_1.png' alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Lorem Ipsum Dolor Sit
            </h1>
            <p className='card__parrafo'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            </div>
        </div>
        <div className="card">
          <img className='card__img' src='./images/servicio_2.png' alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Lorem Ipsum Dolor Sit
            </h1>
            <p className='card__parrafo'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card">
          <img className='card__img' src='./images/servicio_3.png' alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Lorem Ipsum Dolor Sit
            </h1>
            <p className='card__parrafo'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card">
          <img className='card__img' src='./images/servicio_4.png' alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Lorem Ipsum Dolor Sit
            </h1>
            <p className='card__parrafo'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nuestros_Servicios