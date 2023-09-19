import "./App.css";
import Contacto from "./componentes/Contacto/Contacto";
import Footer from "./componentes/Footer/Footer";
import Hero from "./componentes/Hero/Hero";
import Mision from "./componentes/Mision/Mision";
import Proy_dest from "./componentes/Proyectos Destacados/Proy_dest";
import Nuestros_Servicios from "./componentes/nuestros servicios/Nuestros_Servicios";
import Planes from "./componentes/Planes/Planes";
import Nos_presentamos from "./componentes/Nos presentamos/Nos_presentamos.jsx";
import Navbar from "./componentes/Navbar/Navbar";
import Asi_trabajamos from "./componentes/S5_Asi_trabajamos/asi_trabajamos";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Mision></Mision>
      <Nuestros_Servicios></Nuestros_Servicios>
      <Proy_dest></Proy_dest>
      <Asi_trabajamos></Asi_trabajamos>

      <Planes></Planes>
      <Nos_presentamos></Nos_presentamos>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
