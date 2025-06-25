import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/', // This MUST match your repo name exactly
  plugins: [react()]
})
