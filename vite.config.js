import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Local dev: forwards /api/chat to the FastAPI server (uvicorn api.index:app --port 8000)
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
