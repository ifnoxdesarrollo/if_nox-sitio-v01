import './App.css';
import Contacto from './Componentes/Contacto/Contacto';
import Footer from './Componentes/Footer/Footer';
import Hero from './Componentes/Hero/Hero';
import Mision from './Componentes/Mision/Mision';
import Proy_dest from './Componentes/Proyectos Destacados/Proy_dest';
import Nuestros_Servicios from './Componentes/nuestros servicios/Nuestros_Servicios';
import S5_Asi_trabajamos from './Componentes/S5_Asi_trabajamos/S5_Asi_trabajamos';
import Planes from './Componentes/Planes/Planes';
import Nos_presentamos from './Componentes/Nos presentamos/Nos_presentamos.jsx';
import Navbar from './Componentes/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Mision></Mision>
      <Nuestros_Servicios></Nuestros_Servicios>
      <Proy_dest></Proy_dest>
      {/* <S5_Asi_trabajamos></S5_Asi_trabajamos> */}
      <Planes></Planes>
      <Nos_presentamos></Nos_presentamos>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
