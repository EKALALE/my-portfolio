import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Clean config for Tailwind v4 (no PostCSS plugin, no imports)
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})
