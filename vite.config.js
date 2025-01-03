import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages에 맞춰 설정
  build: {
    outDir: 'docs', // 빌드 결과물을 docs 폴더에 저장
    copy: ['public/*'] // public 디렉토리 내 모든 파일 복사
  }
});