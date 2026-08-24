import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Vite 8 uses rolldown which requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'vendor-motion';
          if (id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor-react';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
})
