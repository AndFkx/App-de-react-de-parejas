import './AcercaDe.css'

// Pestaña 3 — Acerca de: historia, misión y visión del proyecto.
function AcercaDe() {
  return (
    <section className="acerca container">
      <h1>Acerca de Passione Rossa</h1>

      <div className="acerca__grid">
        <article>
          <h2>Historia</h2>
          <p>
            Este catálogo nace como proyecto académico para estudiar la
            trayectoria de una marca que desde 1947 combina ingeniería de
            competición con vehículos de calle.
          </p>
        </article>

        <article>
          <h2>Misión</h2>
          <p>
            Presentar de forma clara y ordenada la oferta de modelos, sus
            precios de referencia y las características que los distinguen.
          </p>
        </article>

        <article>
          <h2>Visión</h2>
          <p>
            Convertirse en un catálogo sencillo, rápido y agradable de
            navegar para cualquier persona interesada en el automovilismo de
            alto rendimiento.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AcercaDe
