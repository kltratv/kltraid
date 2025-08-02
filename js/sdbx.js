(function () {
  let isSandboxed = false;

  try {
    // Jika bisa akses top.location → aman, bukan sandbox
    const test = window.top.location.href;
    isSandboxed = false;
  } catch (err) {
    // Kalau akses ditolak → sandbox aktif
    isSandboxed = true;
  }

  if (isSandboxed) {
    // ❗ Tampilkan warning bahwa halaman ini sedang dalam sandbox
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999999;
      font-family: 'Teko', sans-serif;
      color: white;
      text-align: center;
      padding: 2rem;
    `;

    overlay.innerHTML = `
      <div style="max-width: 90%; background: #1f1f1f; padding: 2rem; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
        <div style="font-size: 2rem; color: #f87171; margin-bottom: 1rem;">⚠️ Sandbox Detected</div>
        <div style="font-size: 1.2rem;">This page is loaded inside an <strong>iframe with sandbox</strong> enabled.<br><br>
        Please remove the <code>sandbox</code> attribute from the iframe to allow full functionality and ads to work properly.</div>
      </div>
    `;

    document.body.appendChild(overlay);
  }
})();
