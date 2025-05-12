self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      // Jika gagal ambil dari jaringan, bisa fallback (jika nanti ditambah cache)
      return new Response('Offline or resource not found.', {
        status: 404,
        statusText: 'Offline'
      });
    })
  );
});
