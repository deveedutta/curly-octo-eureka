export const resources = [
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "alarm_on_black_192x192.png",
  "favicon.ico",
];

export const isLocalhost = () => {
  let ishostNameLocalHost = window.location.hostname === "localhost";
  let isIPv6LocalHost = window.location.hostname === "[::1]";
  let isLocalhostIP = window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  );

  return Boolean(ishostNameLocalHost || isIPv6LocalHost || isLocalhostIP);
};

export const isSameOrigin = () => {
  const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  if (publicUrl.origin === window.location.origin) {
    return true;
  }

  if (process.env.NODE_ENV === "production") {
  }

  // if nothing passes
  return false;
};

export const isSWAvailable = () => {
  if ("serviceWorker" in navigator) {
    return true;
  }
  return false;
}

export const isAllGood = () => {

}

export const register = (config) => {
  
    navigator.serviceWorker
      .register("/sw.js", {
        scope: "",
      })
      .then((reg) => {
        if (reg.installing) {
          console.log("Service worker installing");
        } else if (reg.waiting) {
          console.log("Service worker installed");
        } else if (reg.active) {
          console.log("Servie worker active");
        }
      })
      .catch((err) => {
        console.log(`Registration failed: ${err}`);
      });
  }
};

export const loadResources = () => {
  return resources.map((url, index, array) => {
    return fetch(url);
  });
};

export const onLoad = () => {
  window.addEventListener("load", () => {});
};

export const isServiceWorkerValid = (url, config) => {
  fetch(url, {
    headers: { "Service-Worker": "script" },
  })
  .then((response) => {
    const contentType = response.headers.get('content-type');
    if(response.status === 404) {
      unregister();
      return;
    }

    if(contentType === null) {
      unregister();
      return;
    }

    if(contentType !== null && contentType.indexOf('javascript') === -1) {
      unregister();
      return;
    }

    // else
    register(url, config);

  })
};

export const unregister = () => {
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister().then(() => {
      window.location.reload();
    })
  })
}

export default {
  resources,
  register,
  unregister,
  isSameOrigin,
  isLocalhost,
  loadResources,
  isServiceWorkerValid
};
