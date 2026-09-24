// Service worker do Prumo: permite abrir o app sem internet.
// A cada atualização do app, troque o número da versão abaixo (ex.: prumo-v2).
const V = 'prumo-v1';
const ARQUIVOS = ['./', 'index.html', 'privacidade.html', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'plus-jakarta-sans.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  if (r.mode === 'navigate') {
    // páginas: tenta a internet primeiro (pega atualizações) e cai no cache se estiver offline
    e.respondWith(fetch(r).then(res => {
      const c = res.clone(); caches.open(V).then(ca => ca.put(r, c)); return res;
    }).catch(() => caches.match(r).then(x => x || caches.match('index.html'))));
    return;
  }
  // demais arquivos: cache primeiro
  e.respondWith(caches.match(r).then(x => x || fetch(r).then(res => {
    const c = res.clone(); caches.open(V).then(ca => ca.put(r, c)); return res;
  })));
});
