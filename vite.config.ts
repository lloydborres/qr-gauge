import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["static-domain.ngrok-free.app", "localhost", "127.0.0.1"],
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@providers": path.resolve(__dirname, "./src/providers"),
    },
  },
});
