// vite.config.js

// Standard
import { defineConfig } from "vite";

// Vendor
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: "index.min.js",
        assetFileNames: "style.min.css",
      },
    },
  },
});
