// Service Worker for Econic Media Website
// Improves performance through caching and offline capabilities

const CACHE_NAME = 'econic-media-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/index.css',
  '/Product Pictures/1 (1).png',
  '/Product Pictures/1 (2).png',
  '/Product Pictures/1 (3).png',
  '/Product Pictures/1 (4).png',
  '/Product Pictures/1 (5).png',
  '/Product Pictures/1 (6).png',
  '/Product Pictures/1 (7).png',
  '/Product Pictures/1 (8).png',
  '/lovable-uploads/70026725-9e78-48a3-8dd2-c8b817a3fba4.png', // Hero image
];

// Installation event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network first with cache fallback strategy for images
const imageStrategy = async (request) => {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache the response if it's valid
    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // If network fails, try cache
    const cachedResponse = await caches.match(request);
    return cachedResponse || Promise.reject('Not found in cache');
  }
};

// Cache first with network fallback for static assets
const cacheFirstStrategy = async (request) => {
  // Try the cache first
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    // If not found in cache, fetch from network and cache it
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // If both cache and network fail
    return Promise.reject('Resource not available');
  }
};

// Fetch event - intercept requests and apply caching strategies
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Don't cache API calls or external resources
  if (url.pathname.includes('/api/') || !url.origin.includes(self.location.origin)) {
    return;
  }
  
  // Apply image strategy for image files
  if (event.request.destination === 'image' || url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i)) {
    event.respondWith(imageStrategy(event.request));
    return;
  }
  
  // Apply cache-first strategy for static assets
  if (event.request.destination === 'style' || 
      event.request.destination === 'script' || 
      event.request.destination === 'font' ||
      url.pathname.match(/\.(css|js|woff2?)$/i)) {
    event.respondWith(cacheFirstStrategy(event.request));
    return;
  }
  
  // Network-first for HTML documents
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }
});
