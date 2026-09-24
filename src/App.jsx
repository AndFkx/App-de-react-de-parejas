import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Portafolio from './pages/Portafolio.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import AcercaDe from './pages/AcercaDe.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

// Componente raíz de la SPA.
// Define el layout general (Navbar fija + contenido de la ruta activa) y
// resuelve las 5 vistas exigidas por la guía mediante <Routes>/<Route>.
function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          {/* Pestaña 1: Inicio */}
          <Route path="/" element={<Home />} />

          {/* Pestaña 2: Portafolio (catálogo) */}
          <Route path="/portafolio" element={<Portafolio />} />

          {/* Ruta dinámica con useParams: detalle de un producto por id.
              La carga real de datos se implementa en la Entrega 2. */}
          <Route path="/portafolio/:id" element={<DetalleProducto />} />

          {/* Pestaña 3: Acerca de */}
          <Route path="/acerca" element={<AcercaDe />} />

          {/* Pestaña 4: Contacto */}
          <Route path="/contacto" element={<Contacto />} />

          {/* Ruta comodín (*): captura cualquier URL no definida arriba */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
