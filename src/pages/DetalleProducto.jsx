import { useParams, Link } from 'react-router-dom'

// Vista de detalle dinámico (/portafolio/:id).
// useParams() lee el segmento ":id" desde la URL. La información completa
// del modelo (imagen, ficha técnica, etc.) se conectará en la Entrega 2.
function DetalleProducto() {
  const { id } = useParams()

  return (
    <section className="container" style={{ padding: '3rem 0' }}>
      <h1>Detalle del modelo #{id}</h1>
      <p>La información completa de este modelo se cargará en la Entrega 2.</p>
      <Link to="/portafolio">← Volver al portafolio</Link>
    </section>
  )
}

export default DetalleProducto
