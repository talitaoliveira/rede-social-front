var serviceWorkerName = 'redesocial.sw';
var version = 2;
var actualServiceWorker = serviceWorkerName + '-' + version;
var oldServiceWorker = serviceWorkerName + '-' + (version - 1);

var urls = [
    './',
    './bundle.js',
    './main.css',
    './img/favicon.ico',
    './img/logo.png'
];

function installServiceWorker() {
    console.log('--- ServiceWorker installed ---');
}

function activeServiceWorker() {
    console.log('--- Start to activate Service Worker ---');
    caches.open(actualServiceWorker).then(cache => {
        console.log('Cache Storage ' + actualServiceWorker + ' foi ativado com sucesso!');

        cache.addAll(urls).then(() => {
            console.log('--- Finish to addAll URLs ---');

            caches.delete(oldServiceWorker)
            console.log('Cache Storage ' + oldServiceWorker + ' foi excluído!');
        }).catch((err) => {
            console.log(`[ERRO - addAll]: ${err}`);
        })
    })
}

function fetchFiles(event) {
    console.log('--- Start to fecth data ---');
    event.respondWith(
        caches.match(event.request).then(function (arquivoCache) {
            return arquivoCache ? arquivoCache : fetch(event.request);
        })
    )
}


self.addEventListener("install", installServiceWorker);
self.addEventListener("activate", activeServiceWorker);
self.addEventListener("fetch", fetchFiles);