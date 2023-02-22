import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { fileURLToPath } from 'url'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@': path.resolve(dirname, './src'),
      '@assets': path.resolve(dirname, './src/assets'),
      '@styles': path.resolve(dirname, './src/assets/styles'),
      '@components': path.resolve(dirname, './src/components'),
      '@hooks': path.resolve(dirname, './src/hooks'),
      '@config': path.resolve(dirname, './src/config'),
      '@helpers': path.resolve(dirname, './src/helpers'),
      '@services': path.resolve(dirname, './src/services'),
    },
  },
})
