import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        calculadora: fileURLToPath(new URL('./calculadora/index.html', import.meta.url)),
        cozinha: fileURLToPath(new URL('./cozinha-nutrideia/index.html', import.meta.url)),
        choque: fileURLToPath(new URL('./choque-metabolismo/index.html', import.meta.url)),
        terapia: fileURLToPath(new URL('./terapia-emagrecimento/index.html', import.meta.url)),
      },
    },
  },
})
