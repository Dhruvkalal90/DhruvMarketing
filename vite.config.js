import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      // Replace with your real, deployed domain name
      hostname: 'https://dhruvmarketing.vercel.app', 
      
      // List out all the paths/routes available in your SPA
      dynamicRoutes: [
        '/',
        '/#services',
        '/#contact',
        '/#areas'
      ]
    })
  ],
})