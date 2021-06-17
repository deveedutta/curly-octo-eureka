self.addEventListener("install", (event) => {
  return;
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/1.chunk.js",
        "alarm_on_black_192x192.png",
        "favicon.ico",
        "manifest.json",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  return;
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() always resolves
      // therefore, the following check is important
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.response)
          .then((response) => {
            let clone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, clone);
            });

            return response;
          })
          .catch((err) => {
            console.log("error occurred");
            // throw new Error(err);
            // return cache.match("alarm_on_black_192x192.png");
          });
      }
    })
  );
});
