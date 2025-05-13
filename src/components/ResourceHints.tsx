import React, { useEffect } from 'react';

/**
 * ResourceHints component to improve loading performance by providing resource hints to the browser
 * This component should be included in the App component
 */
const ResourceHints: React.FC = () => {
  useEffect(() => {
    // Add preconnect for external domains
    addPreconnect([
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.vercel-insights.com'
    ]);

    // Add DNS prefetch for less critical domains
    addDnsPrefetch([
      'https://vercel.com'
    ]);

    // Preload critical fonts
    preloadFonts([
      // Add your critical fonts here if any
    ]);

    // Preload critical CSS
    preloadCss([
      '/index.css'
    ]);

  }, []);

  return null; // This component doesn't render anything
};

function addPreconnect(urls: string[]) {
  urls.forEach(url => {
    if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
}

function addDnsPrefetch(urls: string[]) {
  urls.forEach(url => {
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = url;
      document.head.appendChild(link);
    }
  });
}

function preloadFonts(fontUrls: string[]) {
  fontUrls.forEach(url => {
    if (!document.querySelector(`link[rel="preload"][href="${url}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
}

function preloadCss(cssUrls: string[]) {
  cssUrls.forEach(url => {
    if (!document.querySelector(`link[rel="preload"][href="${url}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = 'style';
      document.head.appendChild(link);
    }
  });
}

export default ResourceHints;
