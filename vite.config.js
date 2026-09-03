import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/coingecko-api": {
        target: "https://api.coingecko.com/api/v3",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/coingecko-api/, ""),
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            proxyReq.setHeader(
              "User-Agent",
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            );
          });
        },
      },
    },
  },
});
