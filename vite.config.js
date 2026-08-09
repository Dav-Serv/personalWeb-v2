import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
  build: {
    target: 'es2020',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // pdf.js is deliberately left out of `vendor`: it is only imported when
        // a certificate cover is about to be drawn, and folding it into the
        // eager chunk would put ~460 kB back on the critical path.
        manualChunks: (id) =>
          id.includes('node_modules') && !id.includes('pdfjs-dist')
            ? 'vendor'
            : null,
      },
    },
  },
})
