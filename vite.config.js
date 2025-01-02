import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages에 맞춰 설정
  build: {
    outDir: 'public' // 빌드 결과물을 public 폴더에 저장
  }
});