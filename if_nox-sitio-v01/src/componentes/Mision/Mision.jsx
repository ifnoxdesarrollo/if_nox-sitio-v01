import React from 'react'
import './Mision.css'

function Mision() {
  return (
    <div className='mision'>
      <div className="mision__contenedor">
        <div className="mision__contenedor__textos">
          <h1 className='mision__contenedor__textos__titulo'>Nuestra Misión</h1>
          <p className='mision__contenedor__textos__parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            usto a ratione exercitationem quae, officiis rerum eius temporibus
            provident dignissimos rem debitis ut nesciunt repellendus
            impedit autem illum quis ullam.</p>
        </div>
        <div className="mision__contenedor__grilla">
          <div className="mision__contenedor__grilla__fila-1">
            <img className='mision__contenedor__grilla__fila-1__imagen-1' src="/images/mision1.png" alt="" />
            <img className='mision__contenedor__grilla__fila-1__imagen-2' src="/images/mision2.png" alt="" />
          </div>
          <div className="mision__contenedor__grilla__fila-2">
            <img className='mision__contenedor__grilla__fila-1__imagen-3' src="/images/mision3.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Mision