import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jspdf'],
  },  
  server: {
    host: '0.0.0.0',
    allowedHosts: ['ai-document-analyzer-1.onrender.com'],
  },
})
