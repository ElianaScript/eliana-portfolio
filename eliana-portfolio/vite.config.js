import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/eliana-portfolio/',
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  plugins: [react()],
})
