import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: false, // Allow fallback to another port if 5173 is in use
    open: true, // Open browser automatically
  },
  plugins: [
    react(),
    // mode === 'development' && componentTagger(), // Temporarily commented out
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
