(function () {
  function isSandboxed() {
    try {
      // Jika berhasil akses → bukan sandbox
      window.top.location.href;
      return false;
    } catch (e) {
      // Jika tidak bisa akses dan ini dalam iframe → sandbox
      return window.top !== window.self;
    }
  }

  if (isSandboxed()) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: 'Teko', sans-serif;
      font-size: 1.2rem;
      z-index: 999999;
    `;
    overlay.innerHTML = `
      <div style="background:#1f1f1f; padding:2rem; border-radius:12px; text-align:center; max-width:90%;">
        ⚠️ <strong>Sandbox iframe detected</strong><br><br>
        Please <code>remove sandbox</code> from the iframe to allow full functionality and ads to load properly.
      </div>
    `;
    document.body.appendChild(overlay);
  }
})();
