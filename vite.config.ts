// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/scouting-app-practice",
  server: {
    port: 80
  }
})
