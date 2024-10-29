(function() {
  const n = document, o = n.head;
  const t = "pointer-events: none; height: 1px; width: 0; opacity: 0; visibility: hidden; position: fixed; bottom: 0;";
  const a = n.createElement("div"), s = n.createElement("div"), d = n.createElement("ins");

  a.id = "div-adsterra-ad";
  a.style = t;
  s.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads";
  s.style = t;
  d.className = "adsbyadsterra";
  d.style = "display: none;";

  const i = { allowed: null, elements: [a, s, d] };

  this.checkAdsStatus = function(callback) {
    const e = n.body;
    if (typeof callback === "function") {
      if (typeof i.allowed === "boolean") {
        callback(i);
      } else {
        e.appendChild(a);
        e.appendChild(s);
        e.appendChild(d);
        setTimeout(function() {
          if (a.offsetHeight === 0 || s.offsetHeight === 0 || !d.firstElementChild) {
            i.allowed = false;
            callback(i);
          } else {
            const adScript = n.createElement("script");
            adScript.src = "//disappearsurgery.com/ae/3b/26/ae3b266ab5ae91abcaa715535a094b32.js"; // Adsterra URL
            adScript.async = true;
            adScript.crossOrigin = "anonymous";
            adScript.onload = function() {
              i.allowed = true;
              callback(i);
            };
            adScript.onerror = function() {
              i.allowed = false;
              callback(i);
            };
            o.appendChild(adScript);
          }
          a.remove();
          s.remove();
          d.remove();
        }, 100);
      }
    }
  };
}).call(this);

function antiAdBlockerHandler() {
  window.checkAdsStatus(function(ads) {
    if (!ads.allowed) {
      console.log("%c[ADS]", "color:#d32f2f;", "Blocked");

      const icon = "<svg style='stroke:none;fill:currentColor!important' viewBox='0 0 24 24'><path d='M12.2 9L10.2 7H13C14.1 7 15 7.9 15 9V11.8L13 9.8V9H12.2M23 9V7H19C17.9 7 17 7.9 17 9V11C17 12.1 17.9 13 19 13H21V15H18.2L20.2 17H21C22.1 17 23 16.1 23 15V13C23 11.9 22.1 11 21 11H19V9H23M22.1 21.5L20.8 22.8L14.4 16.4C14.1 16.7 13.6 17 13 17H9V10.9L7 8.9V17H5V13H3V17H1V9C1 7.9 1.9 7 3 7H5.1L1.1 3L2.4 1.7L22.1 21.5M5 9H3V11H5V9M13 14.9L11 12.9V15H13V14.9Z'/></svg>";
      const title = "Ad blocker detected!";
      const message = "<p>We have detected that you are using an adblocking plugin in your browser.<br/>The revenue we earn by the advertisements is used to manage this website, we request you to whitelist our website in your adblocking plugin.</p>";

      const element = document.createElement("div");
      element.className = "popSc";
      element.innerHTML = `<div class='popBo'>${icon}<h2>${title}</h2><div class='popCo'>${message}</div></div>`;
      document.body.appendChild(element);
    } else {
      console.log("%c[ADS]", "color:#43a047;", "Allowed");
    }
  });

  document.removeEventListener("DOMContentLoaded", antiAdBlockerHandler);
}

if (document.readyState === "complete" || document.readyState !== "loading") {
  antiAdBlockerHandler();
} else {
  document.addEventListener("DOMContentLoaded", antiAdBlockerHandler);
}
