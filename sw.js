const CACHE_NAME = "bangkok-2026-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.json",
  "./icon.png",
  "./icon-192.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 天氣 API 一律走網路,不快取(即時性優先)
  if (url.hostname.includes("open-meteo.com")) {
    event.respondWith(fetch(event.request).catch(() => new Response("{}")));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (event.request.method === "GET" && networkResponse.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
