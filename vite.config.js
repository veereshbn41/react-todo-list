import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/src/main.jsx', // Explicitly add the module to external
        // Add other modules here if needed
      ],
    },
  },
})
