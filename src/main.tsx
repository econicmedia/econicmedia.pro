import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './lib/register-service-worker'

// Apply performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Disable animations/transitions until page is fully loaded
  document.documentElement.classList.add('no-animations');
  
  // Remove the class once page is loaded to restore animations
  window.addEventListener('load', () => {
    // Minor delay to ensure everything is rendered
    setTimeout(() => {
      document.documentElement.classList.remove('no-animations');
    }, 300);
  });
});

// Register service worker for caching and offline capabilities
registerServiceWorker();

// Render the application
createRoot(document.getElementById("root")!).render(<App />);
