!function(){var e=["0ac7619abe7493fb/bundle.js","5aecc3e5be9e28a5/bundle.css","assets/NYC_MODA.png","assets/CARTO.png","assets/ENIGMA.png","assets/SAVI_PRATT.png","assets/STAE_CO.jpg","assets/icon.png","about","schedule","exhibition","talks","workshops","submit","ref","support","manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.0.0").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,t){if("1.0.0"!==e[t])return self.caches.delete(e[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map