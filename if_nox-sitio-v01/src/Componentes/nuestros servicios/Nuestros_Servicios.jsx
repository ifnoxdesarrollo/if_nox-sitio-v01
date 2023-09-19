import React from 'react'
import './Nuestros_Servicios.css';

var windowWidth;
var image1;
var image2;
var image3;
var image4;

windowWidth = window.innerWidth;
if(windowWidth <= 415){
  image1 = "./images/servicio_1.png";
  image2 = "./images/servicio_3.png";
  image3 = "./images/servicio_4.png";
  image4 = "./images/servicio_2.png";
}else{
  image1 = "./images/desarrollo_web.png";
  image2 = "./images/disenio.png";
  image3 = "./images/community_manager.png";
  image4 = "./images/asesoria.png";
}


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
      <div className="servicios__cards" id='style-1'>

        <div id='slide1' className="card">
          <img className='card__img' src={image1} alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Desarrollo Web
            </h1>
            <p className='card__parrafo'>
              Ofrecemos servicios de desarrollo web utilizando
              tecnologías de vanguardia y las mejores prácticas
              para crear sitios web impactantes, aplicaciones web
              interactivas y sistemas de comercio electrónico seguros
              y de alto rendimiento. Estamos comprometidos con la
              optimización y la escalabilidad, asegurando que tu
              proyecto crezca junto con tu éxito.
            </p>
          </div>
        </div>


        <div id='slide2' className="card">
          <img className='card__img' src={image2} alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Diseño
            </h1>
            <p className='card__parrafo'>
              Somos apasionados por el diseño web y gráfico.
              Nuestro equipo altamente creativo trabaja para
              dar vida a tus ideas a través de logotipos impactantes,
              identidades de marca únicas y sitios web atractivos.
              Desde la estética hasta la funcionalidad,
              nos comprometemos a crear una experiencia
              visual que destaque y conecte con tu audiencia.
              Ya sea que necesites un nuevo diseño de marca o
              una renovación web, estamos aquí para dar vida a
              tus visiones en línea.
            </p>
          </div>
        </div>


        <div id='slide3' className="card">
          <img className='card__img' src={image3} alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Community Manager
            </h1>
            <p className='card__parrafo'>
              Nuestro equipo de expertos se encargará
              de interactuar y construir conexiones
              significativas con tus seguidores en
              redes sociales y otros canales.
              Desde la creación de contenido
              cautivador hasta la gestión de comentarios
              y la monitorización de tendencias, estamos
              aquí para impulsar la participación y el
              compromiso de tu comunidad en línea. Deja
              que nosotros te ayudemos a construir una
              presencia sólida y auténtica en las redes
              sociales, permitiéndote concentrarte en lo
              que más importa: tu negocio.
            </p>
          </div>
        </div>


        <div id='slide4' className="card">
          <img className='card__img' src={image4} alt=''></img>
          <div className="card__textos">
            <h1 className="card__titulo">
              Asesoría
            </h1>
            <p className='card__parrafo'>
              Somos apasionados por el diseño web y gráfico.
              Nuestro equipo altamente creativo trabaja para
              dar vida a tus ideas a través de logotipos impactantes,
              identidades de marca únicas y sitios web atractivos.
              Desde la estética hasta la funcionalidad,
              nos comprometemos a crear una experiencia
              visual que destaque y conecte con tu audiencia.
              Ya sea que necesites un nuevo diseño de marca o
              una renovación web, estamos aquí para dar vida a
              tus visiones en línea.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Nuestros_Servicios