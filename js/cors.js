(function () {
  // Jika bukan di dalam iframe, keluar dari script
  if (window.top === window.self) return;

  const disallowedOrigins = [
    'https://testklttra.blogspot.com'
  ];
  const BLOCK_URL = '/html/block.html';

  function isBlocked() {
    try {
      const referrer = document.referrer || '';
      if (!referrer) return true; // referrer kosong → curiga
      for (let origin of disallowedOrigins) {
        if (referrer.startsWith(origin)) return true;
      }
    } catch (e) {
      return true; // fallback → lebih aman
    }
    return false;
  }

  if (isBlocked()) {
    console.warn("❌ Embed tidak diizinkan. Redirect background aktif...");

    // Biarkan jalan dulu, tapi tiap interval cek & redirect
    const interval = setInterval(() => {
      try {
        if (window.top) {
          window.top.location.href = BLOCK_URL;
        } else {
          window.location.href = BLOCK_URL;
        }
        clearInterval(interval);
      } catch (err) {
        // Kalau sandbox menghalangi top-navigation
        window.location.href = BLOCK_URL;
        clearInterval(interval);
      }
    }, 120000); // cek & redirect setiap 30 detik
  }
})();
