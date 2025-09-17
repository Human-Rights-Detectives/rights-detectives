import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      includeAssets: [
        'favicon.ico', 
        'favicon.svg', 
        'apple-touch-icon.png', 
        'vite.svg',
        'robots.txt',
        'font/Jalnan.ttf',
        'font/NanumSquare_acR.ttf',
        'font/NanumSquare.ttf',
        'font/OmyuPretty.ttf',
        'font/SebangGothic.ttf',
        'font/SebangGothicBold.ttf',
        'images/board-game-image.jpg',
        'images/document.svg',
        'images/fail-memo.svg',
        'images/line.svg',
        'images/magnifying-glass.svg',
        'images/memo-clear.svg',
        'images/memo.svg',
        'images/star.svg',
        'images/start-bg.svg',
        'images/underline.svg',
        'images/target/1-1.jpg',
        'images/target/1-2.jpg',
        'images/target/1-3.jpg',
        'images/target/2-1.jpg',
        'images/target/2-2.jpg',
        'images/target/2-3.jpg',
        'images/target/3-1.jpg',
        'images/target/3-2.jpg',
        'images/target/3-3.jpg',
        'images/target/4-1.jpg',
        'images/target/4-2.jpg',
        'images/target/4-3.jpg',
        'images/target/5-1.jpg',
        'images/target/5-2.jpg',
        'images/target/5-3.jpg',
        'images/target/6-1.jpg',
        'images/target/6-2.jpg',
        'images/target/6-3.jpg',
        'images/target/7-1.jpg',
        'images/target/7-2.jpg',
        'images/target/7-3.jpg',
        'music/basic-bg-song.MP3',
        'music/dark-song.MP3',
        'music/home-song.MP3'
      ],
      manifest: {
        name: '인권탐정단',
        short_name: '인권탐정단',
        description: '내 이름은 노동자, 탐정이죠',
        theme_color: '#FFFFFF',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      injectRegister: "auto",
    }),
  ],
  build: {
    target: "esnext",
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  esbuild: {
    target: "esnext",
  },
});
