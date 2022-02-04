import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import globalStyle from '@originjs/vite-plugin-global-style'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfigPaths(), globalStyle({
    sourcePath: "src/assets/styles"
  })],
})
