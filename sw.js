const CACHE = 'courtroom-quiz-v3';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './ENGLISH  MATTERS    nr_73     11_12   2018      IN the COURTROOM.pdf',
  './RM_B2P_PC_3C_LanguageFocus1.pdf',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const requestUrl = new URL(e.request.url);
  const isAppShell = requestUrl.origin === location.origin && (
    requestUrl.pathname.endsWith('/index.html') ||
    requestUrl.pathname.endsWith('/app.js') ||
    requestUrl.pathname.endsWith('/sw.js') ||
    requestUrl.pathname === '/'
  );

  if (isAppShell) {
    e.respondWith(
      fetch(e.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
