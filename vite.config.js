import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages (adjust if repo name changes)
  base: '/react-assignment/',
  plugins: [react()],
  build: {
    outDir: 'docs', // GitHub Pages expects static files here when deploying from root
  },
})
