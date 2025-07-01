import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    include: ['src/tests/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
  server: {
    host: true,
    watch: {
      usePolling: true,
      interval: 100,
    }
  }
})
