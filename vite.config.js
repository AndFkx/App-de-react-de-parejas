import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración base de Vite: solo necesitamos el plugin oficial de React
// para habilitar JSX y Fast Refresh en modo desarrollo.
export default defineConfig({
  plugins: [react()],
})
