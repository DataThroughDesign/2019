!function(){var e=["87a40de4e323025e/bundle.js","886ea53790f6e74a/bundle.css","assets/ENIGMA.png","assets/SAVI_PRATT.png","assets/NYC_MODA.png","assets/icon.png","about","schedule","exhibition","talks","workshops","submit","ref","support","manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(t){return t||self.fetch(e.request)}))}),self.addEventListener("install",function(t){t.waitUntil(self.caches.open("1.0.0").then(function(t){return t.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(t,n){if("1.0.0"!==e[n])return self.caches.delete(e[n])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map