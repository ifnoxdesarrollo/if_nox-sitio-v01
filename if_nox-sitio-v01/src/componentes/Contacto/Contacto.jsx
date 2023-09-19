import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div className='contacto' id='contacto'>
      <div className="contacto__contenedor">
        <div className="contacto__contenedor__bloque">
          <h3 className='contacto__contenedor__bloque__titulo'>Podemos asesorarte ¡Contanos qué necesitás!</h3>
          <div className="contacto__contenedor__bloque__iconos">
            <img className='contacto__contenedor__bloque__iconos__icono-1' src="/images/whatsapp.svg" alt="" />
            <img className='contacto__contenedor__bloque__iconos__icono-2' src="/images/calendario.svg" alt="" />
            <img className='contacto__contenedor__bloque__iconos__icono-3' src="/images/mail.svg" alt="" />
            <img className='contacto__contenedor__bloque__iconos__icono-4' src="/images/instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto