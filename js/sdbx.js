(function () {
  let sandboxDetected = false;

  try {
    // Deteksi sandbox hanya jika dibuka dari iframe
    if (window.top !== window.self) {
      // Test akses — kalau gagal berarti sandbox
      try {
        window.top.location.href;
        sandboxDetected = false;
      } catch (e) {
        sandboxDetected = true;
      }
    }
  } catch (e) {
    sandboxDetected = true;
  }

  function showWarningOverlay(message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.92);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999999;
      color: white;
      font-size: 1.3rem;
      text-align: center;
      padding: 2rem;
      font-family: sans-serif;
    `;
    overlay.innerHTML = `<div>⚠️ This page is inside a sandboxed iframe. Please remove <code>sandbox</code> to view content properly.</div>`;
    document.body.appendChild(overlay);
  }

  window.addEventListener('load', () => {
    console.log("[sdbx.js] Sandbox Detected?", sandboxDetected); // DEBUG
    if (sandboxDetected) {
      showWarningOverlay("⚠️ This page is loaded inside a sandboxed iframe. Please remove the sandbox attribute to display it properly.");
    }
  });
})();
