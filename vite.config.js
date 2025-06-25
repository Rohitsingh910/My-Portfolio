import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My_Portfolio-main/', // Replace with your repo name
  plugins: [react()],
})
