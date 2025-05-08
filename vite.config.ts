import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // HTTP/2 configuration will be handled by deployment platform
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Simplified build configuration for better Vercel compatibility
  build: {
    // Generate source maps for production
    sourcemap: true,
    // Basic configuration for CSS
    cssCodeSplit: true,
  },
  // Optimize preview server
  preview: {
    port: 8080,
    // Enable HTTP compression for better performance
    compress: true,
  },
}));
