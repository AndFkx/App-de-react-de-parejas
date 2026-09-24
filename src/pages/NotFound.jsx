import { Link } from 'react-router-dom'
import './NotFound.css'

// Ruta comodín (*): se renderiza automáticamente ante cualquier URL
// que no coincida con ninguna de las rutas definidas en App.jsx.
function NotFound() {
  return (
    <section className="not-found container">
      <h1>404</h1>
      <p>Esta pista no existe. La ruta que buscas no está disponible.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFound
