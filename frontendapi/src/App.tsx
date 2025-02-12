//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderApp from "./components/layout/HeaderApp"
import NavarApp from "./components/layout/NavbarApp"
import FooterApp from "./components/layout/FooterApp"
import HomeApp from "./components/layout/HomeApp"
import QuienesSomos from "./Pages/QuienesSomos"
import Productos from"./Pages/Productos"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router> {/* Envolvemos todo en Router */}
    <HeaderApp /> {/* Esto es parte de la navegación común */}
    <NavarApp />
    
    <Routes> {/* Envolvemos las rutas dentro de Routes */}
      {/* Ruta principal */}
      <Route path="/" element={<HomeApp />} /> {/* Página de inicio */}
      
      {/* Ruta de "Quienes Somos" */}
      <Route path="/sobre-nosotros" element={<QuienesSomos />} /> {/* Página Quienes Somos */}
      <Route path="/Productos" element={<Productos />}/>
    </Routes>
    
    <FooterApp /> {/* Pie de página */}
  </Router> 
      

    
  );
}

export default App
