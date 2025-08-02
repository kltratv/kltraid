(function () {
  let sandboxDetected = false;

  try {
    // Deteksi apakah kita diblok untuk mengakses top.location → berarti sandbox
    sandboxDetected = !window.top.location.hostname;
  } catch (e) {
    sandboxDetected = true;
  }

  function showWarningOverlay() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2147483647;
      font-family: 'Teko', sans-serif;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background: #1f1f1f;
      color: #fff;
      max-width: 90%;
      width: 400px;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.7);
      text-align: center;
      font-family: 'Teko', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.5px;
    `;

    box.innerHTML = `
      <div style="font-size: 2rem; color: #f87171; margin-bottom: 1rem;">
        ⚠️ Sandbox Detected
      </div>
      <div style="font-size: 1rem; font-family: system-ui, sans-serif;">
        This page is being loaded inside an <strong>iframe with sandbox</strong> enabled.<br><br>
        Please <strong style="color:#f87171;">remove the sandbox attribute</strong> to display this content properly.
      </div>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }

  window.addEventListener('load', function () {
    if (sandboxDetected) {
      showWarningOverlay();
    }
  });
})();
