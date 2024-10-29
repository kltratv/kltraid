document.addEventListener("DOMContentLoaded", function() {
  // Membuat elemen untuk mendeteksi AdBlock
  const adDetector = document.createElement("div");
  adDetector.className = "ad-test-element";
  adDetector.style.cssText = "width: 1px; height: 1px; position: absolute; visibility: hidden;";
  document.body.appendChild(adDetector);

  setTimeout(function() {
    // Jika elemen ini dihapus atau tidak tampil, kemungkinan besar AdBlock aktif
    if (!adDetector.offsetParent) {
      const icon = "<svg style='stroke:none;fill:currentColor!important' viewBox='0 0 24 24'><path d='M12.2 9L10.2 7H13C14.1 7 15 7.9 15 9V11.8L13 9.8V9H12.2M23 9V7H19C17.9 7 17 7.9 17 9V11C17 12.1 17.9 13 19 13H21V15H18.2L20.2 17H21C22.1 17 23 16.1 23 15V13C23 11.9 22.1 11 21 11H19V9H23M22.1 21.5L20.8 22.8L14.4 16.4C14.1 16.7 13.6 17 13 17H9V10.9L7 8.9V17H5V13H3V17H1V9C1 7.9 1.9 7 3 7H5.1L1.1 3L2.4 1.7L22.1 21.5M5 9H3V11H5V9M13 14.9L11 12.9V15H13V14.9Z'/></svg>";
      const title = "Ad blocker detected!";
      const message = "<p>We have detected that you are using an adblocking plugin in your browser.<br/>The revenue we earn by the advertisements is used to manage this website, we request you to whitelist our website in your adblocking plugin.</p>";

      // Membuat popup
      const element = document.createElement("div");
      element.className = "popSc";
      element.innerHTML = `<div class='popBo'>${icon}<h2>${title}</h2><div class='popCo'>${message}</div></div>`;
      document.body.appendChild(element);
    } else {
      console.log("%c[ADS]", "color:#43a047;", "Allowed");
    }

    // Hapus elemen detektor
    adDetector.remove();
  }, 100);
});
