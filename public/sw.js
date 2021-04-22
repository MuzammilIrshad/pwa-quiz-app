


console.warn("sw from public folder");

let cacheData = 'appv1';

this.addEventListener('install', ((event) => {

    event.waitUntil(
        caches.open(cacheData).then((cache) => {

            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/main.chunk.js',
                '/static/js/vendors~main.chunk.js',
                '/index.html',
                '/'
            ])
        })
    )
}))
this.addEventListener('fetch', ((event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {

                if (response) {
                    return response;
                }
            })
        )
    }
}))