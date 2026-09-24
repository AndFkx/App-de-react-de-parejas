import { Link } from 'react-router-dom'
import './Home.css'

// Pestaña 1 — Inicio: pantalla de bienvenida con presentación general
// del proyecto y secciones destacadas.
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__eyebrow">Catálogo académico no oficial</p>
          <h1 className="hero__title">
            Ingeniería,
            <br />
            velocidad
            <br />
            y diseño.
          </h1>
          <p className="hero__text">
            Passione Rossa es un catálogo digital creado como proyecto
            académico para explorar modelos, precios de referencia y la
            historia detrás de una de las marcas más reconocidas del
            automovilismo.
          </p>
          <Link to="/portafolio" className="hero__cta">
            Ver el portafolio
          </Link>
        </div>
      </section>

      <section className="highlights container">
        <article className="highlight">
          <h2>1947</h2>
          <p>Año de fundación de la marca en Maranello, Italia.</p>
        </article>
        <article className="highlight">
          <h2>+240</h2>
          <p>Victorias acumuladas a lo largo de su historia en Fórmula 1.</p>
        </article>
        <article className="highlight">
          <h2>100%</h2>
          <p>De los modelos de este catálogo se ensamblan en Italia.</p>
        </article>
      </section>
    </>
  )
}

export default Home
