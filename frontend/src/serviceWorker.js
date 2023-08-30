// serviceWorker.js

const CACHE_NAME = 'my-cache-v1'; // versioned cache name

// List of resources to cache
const urlsToCache = [
  'https://alfredofaustino.com', // the start_url
  '/index.html',
  '/index.css',
  '/App.js',
  '/App.css',
  '/ParallaxSection.js',
  '/ParallaxSection.css',
  '/VideoPlayer.js',
  '/Contact.js',
  '/ContactForm.js',
  '/ContactInfo.js',
  '/Containers.js',
  '/Footer.js',
  '/FooterStyles.js',
  '/Header.js',
  '/instructionsModal.js',
  '/LoadingScreen.js',
  '/LoadingScreen.css',
  '/LogoFadeOut.js',
  '/Navbar.jsx', // Updated to correct file extension
  '/NavbarStyles.js',
  '/reportWebVitals.js',
  '/setupTests.js',
  // Add other resources to cache
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
