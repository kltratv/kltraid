(function () {
  let sandboxDetected = false;

  try {
    sandboxDetected = window.top !== window.self;
  } catch (e) {
    sandboxDetected = true;
  }

  function showWarningOverlay() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2147483647;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background: #111;
      color: #fff;
      max-width: 90%;
      width: 360px;
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.6);
      text-align: center;
      font-family: system-ui, sans-serif;
      font-size: 1rem;
      line-height: 1.5;
    `;

    box.innerHTML = `
      <div style="font-size: 1.6rem; margin-bottom: 0.5rem;">⚠️ Sandbox Detected</div>
      <div style="margin-top: 0.5rem;">
        This page is being loaded inside an <strong>iframe with sandbox</strong> enabled.<br><br>
        Please <strong style="color:#f66;">remove the sandbox attribute</strong> to display this content properly.
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
