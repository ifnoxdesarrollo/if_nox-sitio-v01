import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div className='contacto' id='contacto'>
      <div className="contacto__contenedor">
        <div className="contacto__contenedor__bloque">
          <h3 className='contacto__contenedor__bloque__titulo'>Podemos asesorarte ¡Contanos qué necesitás!</h3>
          <div className="contacto__contenedor__bloque__iconos">
            <a href="https://wa.me/+54926123123123" target='_blank'><img className='contacto__contenedor__bloque__iconos__icono-1' src="/images/whatsapp.png" alt="whatsapp" /></a>
            <a href=""><img className='contacto__contenedor__bloque__iconos__icono-2' src="/images/calendario.png" alt="calendario" /></a>
            <a href="mailto:ifnox360@gmail.com" target='_blank'><img className='contacto__contenedor__bloque__iconos__icono-3' src="/images/mail.png" alt="email" /></a>
            <a href="https://www.instagram.com/ifnoxdesarrolloweb" target='_blank'><img className='contacto__contenedor__bloque__iconos__icono-4' src="/images/ig.png" alt="instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto