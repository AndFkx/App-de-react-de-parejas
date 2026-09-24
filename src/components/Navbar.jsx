import { NavLink } from 'react-router-dom'
import './Navbar.css'

// Barra de navegación persistente y visible en todas las vistas.
// NavLink añade automáticamente la clase "active" al enlace de la ruta
// actual, y navega sin recargar la página (a diferencia de <a href>).
function Navbar() {
  const links = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/portafolio', label: 'Portafolio' },
    { to: '/acerca', label: 'Acerca de' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <span className="navbar__brand">
          Passione <em>Rossa</em>
        </span>

        <nav>
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
