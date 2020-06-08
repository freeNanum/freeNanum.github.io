'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "dd101d738dd187ac674d8731596db07f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"fabicon-shotwell.png": "3a8f335bb6b892cca63ff13043bd23cf",
"favicon-flutter.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ic_launcher-192.png": "47e9a7872f28916ed7c43dbd3bac920d",
"ic_launcher-48.png": "dcf02693592939bbca399667db039975",
"index.html": "2f7b6f68707bb472b6262f3f8473da31",
"/": "2f7b6f68707bb472b6262f3f8473da31",
"main.dart.js": "389b2fc76c05280ab83e5fd749dfe1ec",
"manifest.json": "a1a27379ac4ff38811cb15a7d4f7d83f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
