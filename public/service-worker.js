const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// INSTALL SW
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache')

      return cache.addAll(urlsToCache)
    }),
  )
})

// LISTEN FOR REQUESTS
self.addEventListener('fetch', (e) => {})

// ACTIVATE THE SW
self.addEventListener('activate', (e) => {})
