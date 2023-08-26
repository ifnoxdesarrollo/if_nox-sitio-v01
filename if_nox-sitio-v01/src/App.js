import './App.css';
import Hero from './componentes/Hero/Hero';
import Proy_dest from './componentes/Proyectos Destacados/Proy_dest';
import Nuestros_Servicios from './componentes/nuestros servicios/Nuestros_Servicios';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Proy_dest></Proy_dest>
      <Nuestros_Servicios/>
    </div>
  );
}

export default App;
