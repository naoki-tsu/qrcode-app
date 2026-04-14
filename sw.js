const CACHE_NAME = 'qr-generator-v2';
const urlsToCache = [
  'index.html',
  'manifest.json'
];

// ファイルを端末に保存（インストール）
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// オフライン時は保存されたファイルを表示
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});