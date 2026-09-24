# Passione Rossa — Entrega 1

Catálogo académico (temática Ferrari) hecho con React 18 + Vite + React Router 6.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Luego abre la URL que muestra la terminal (por defecto http://localhost:5173).

## Cómo subirlo a StackBlitz

1. Ve a https://stackblitz.com/ → "Import from GitHub" o "Create new Vite + React project".
2. Reemplaza los archivos generados por los de esta carpeta (`src/`, `index.html`, etc.).
3. Copia el enlace del proyecto para la entrega.

## Estado de la Entrega 1 (30%)

- [x] Proyecto inicializado con Vite
- [x] React Router 6 configurado (`BrowserRouter`, `Routes`, `Route`)
- [x] Navbar persistente con `NavLink` (Inicio, Portafolio, Acerca de, Contacto)
- [x] Ruta comodín `*` → página 404
- [x] Ruta dinámica `/portafolio/:id` (stub, se completa en Entrega 2)
- [x] Maquetación básica en JSX + CSS por componente

## Pendiente para la Entrega 2 (70%)

- [ ] Catálogo dinámico de productos con `.map()` y `key` única por id
- [ ] Formulario controlado de filtro por precio máximo
- [ ] `useEffect` con consumo asíncrono y función de limpieza (`AbortController`)
- [ ] Manejo de los 4 estados de interfaz: Cargando, Error, Vacío, Éxito
- [ ] Envío funcional del formulario de contacto
