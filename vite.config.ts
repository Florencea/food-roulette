import react from "@vitejs/plugin-react";
import { cwd } from "node:process";
import { CommonServerOptions, defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const { PORT, VITE_WEB_BASE, VITE_TITLE } = loadEnv("development", cwd(), "");

const SERVER_OPTIONS: CommonServerOptions = {
  port: parseInt(PORT, 10),
  strictPort: true,
};

// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_WEB_BASE,
  server: SERVER_OPTIONS,
  preview: SERVER_OPTIONS,
  build: {
    chunkSizeWarningLimit: Infinity,
    reportCompressedSize: false,
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: VITE_TITLE,
        short_name: VITE_TITLE,
        icons: [
          {
            src: "./icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
