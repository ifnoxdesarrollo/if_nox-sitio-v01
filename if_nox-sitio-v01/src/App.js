import './App.css';
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/Footer/Footer';
import Hero from './componentes/Hero/Hero';
import Mision from './componentes/Mision/Mision';
import Proy_dest from './componentes/Proyectos Destacados/Proy_dest';
import Nuestros_Servicios from './componentes/nuestros servicios/Nuestros_Servicios';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Mision></Mision>
      <Nuestros_Servicios/>
      <Proy_dest></Proy_dest>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
