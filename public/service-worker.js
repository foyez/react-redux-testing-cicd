// Help Link: https://googlechrome.github.io/samples/service-worker/custom-offline-page/
// https://www.youtube.com/watch?v=IaJqMcOMuDM

const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// INSTALL SW
self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      console.log('Opened cache')

      return cache.addAll(urlsToCache)
    })(),
  )
})

// ACTIVATE THE SW
self.addEventListener('activate', (event) => {
  const cacheWhiteList = [CACHE_NAME]

  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        }),
      )
    })(),
  )
})

// LISTEN FOR REQUESTS
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's supported.
          const preloadResponse = await event.preloadResponse
          if (preloadResponse) {
            return preloadResponse
          }

          const networkResponse = await fetch(event.request)
          return networkResponse
        } catch (err) {
          console.log('Fetch failed; returning offline page instead.', err)

          return caches.match('offline.html')
        }
      })(),
    )
  }
})
