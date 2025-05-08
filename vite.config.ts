import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-expect-error - Custom plugin without type definitions
import vercelOutputPlugin from "./vite-plugins/vercel-output.js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use absolute URLs for deployment
  base: '/',
  server: {
    host: "::",
    port: 8080,
    // HTTP/2 configuration will be handled by deployment platform
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Add our custom Vercel plugin for production builds
    mode === 'production' && vercelOutputPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize build for better performance
  build: {
    // Generate source maps for production (can be turned off to improve build speed)
    sourcemap: true,
    // Optimize CSS and reduce size
    cssCodeSplit: true,
    // Use lightningcss for better optimization now that it's installed
    cssMinify: 'lightningcss',
    // Configure code splitting strategy
    rollupOptions: {
      output: {
        // Split vendor code for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group React and related packages together
            if (id.includes('react') || id.includes('framer-motion')) {
              return 'vendor-react';
            }
            // Group UI components together
            if (id.includes('radix-ui') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            // All other dependencies
            return 'vendor';
          }
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize dependencies for faster loading
    commonjsOptions: {
      include: [/node_modules/],
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
  // Optimize preview server
  preview: {
    port: 8080,
    // Enable HTTP compression for better performance
    compress: true,
  },
}));
