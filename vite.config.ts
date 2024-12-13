import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "tnf",
        name: "The Nails Factory",
        icons: [
          {
            src: "/tnf/tnf-192x192.svg",
            type: "image/svg+xml",
            sizes: "192x192",
          },
          {
            src: "/tnf/tnf-256x256.svg",
            type: "image/svg+xml",
            sizes: "256x256",
          },
          {
            src: "/tnf/tnf-384x384.svg",
            type: "image/svg+xml",
            sizes: "384x384",
          },
          {
            src: "/tnf/tnf-512x512.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
        ],
        start_url: "/tnf",
        background_color: "#000",
        display: "standalone",
        theme_color: "#fff",
        description:
          "The Nails Factory is a recreation of Universal Paperclips a game based on the idea of artificial intelligence (AI) optimized for a single task.",
      },
    }),
  ],
  base: "/tnf",
  resolve: {
    alias: {
      "@": path.resolve("./"),
    },
  },
});
