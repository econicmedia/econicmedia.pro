// Custom Vite plugin to ensure proper Vercel deployment
export default function vercelOutputPlugin() {
  return {
    name: 'vercel-output-plugin',
    
    // Hook into the build process
    generateBundle(options, bundle) {
      // Add a simple HTML file to verify deployment is working
      bundle['_vercel_health.html'] = {
        type: 'asset',
        fileName: '_vercel_health.html',
        source: '<!DOCTYPE html><html><head><title>Vercel Health Check</title></head><body>OK</body></html>'
      };
    },
    
    // Ensure a properly structured output
    configResolved(config) {
      // Make sure we have a valid outDir
      if (!config.build || !config.build.outDir) {
        return;
      }
      
      // Log resolved configuration for debugging
      console.log('Building for Vercel with output directory:', config.build.outDir);
    }
  };
}
