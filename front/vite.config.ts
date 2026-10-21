import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@locales": path.resolve(__dirname, "src/i18n/locales"),
      "@assets": path.resolve(__dirname, "src/assets"),
    }
  }

})
