import { useState } from 'react'
import './Contacto.css'

// Pestaña 4 — Contacto: formulario controlado para recibir mensajes.
// El estado local (useState) se sincroniza con cada campo mediante onChange,
// y e.preventDefault() evita que el navegador recargue la página al enviar.
function Contacto() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })

  // Un solo manejador para los tres campos, usando el atributo "name"
  // de cada input para actualizar solo esa propiedad del estado.
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO Entrega 2: enviar "form" a un servicio real y mostrar feedback
    // visual de éxito/error al usuario.
    console.log('Formulario enviado (pendiente de integrar en Entrega 2):', form)
  }

  return (
    <section className="contacto container">
      <h1>Contacto</h1>
      <p>¿Tienes preguntas sobre algún modelo? Escríbenos.</p>

      <form className="contacto__form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensaje
          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  )
}

export default Contacto
