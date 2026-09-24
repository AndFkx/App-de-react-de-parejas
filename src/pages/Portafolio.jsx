import './Portafolio.css'

// Pestaña 2 — Portafolio: en la Entrega 1 solo se maqueta la vista con
// tarjetas estáticas. La lógica dinámica se agrega en la Entrega 2.
function Portafolio() {
  return (
    <section className="portafolio container">
      <h1>Portafolio</h1>
      <p className="portafolio__intro">
        Explora los modelos disponibles. En la Entrega 2 esta vista
        consumirá datos de forma asíncrona e incluirá un filtro por precio
        máximo.
      </p>

      {/*
        TODO Entrega 2:
        - Reemplazar estas tarjetas estáticas por un arreglo de productos (useState).
        - Cargar los datos en useEffect (con AbortController y su cleanup).
        - Renderizar con .map() asignando key={producto.id} (nunca el índice).
        - Agregar formulario controlado de filtro por precio máximo.
        - Manejar los 4 estados de interfaz: Cargando, Error, Vacío y Éxito.
        - Enlazar cada tarjeta a /portafolio/:id con <Link>.
      */}
      <div className="portafolio__grid">
        <article className="modelo-card">
          <div className="modelo-card__plate">296 GTB</div>
          <p className="modelo-card__precio">USD 322.986</p>
        </article>
        <article className="modelo-card">
          <div className="modelo-card__plate">SF90 Stradale</div>
          <p className="modelo-card__precio">USD 507.300</p>
        </article>
        <article className="modelo-card">
          <div className="modelo-card__plate">Roma</div>
          <p className="modelo-card__precio">USD 247.000</p>
        </article>
      </div>
    </section>
  )
}

export default Portafolio
