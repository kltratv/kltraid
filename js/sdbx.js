(function () {
  let sandboxDetected = false;
  try {
    const topTest = window.top.location.href;
    window.top.location = window.top.location;
  } catch (e) {
    sandboxDetected = true;
  }

  function showWarningOverlay(message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4vw;
      line-height: 1.5;
      z-index: 999999;
      text-align: center;
      padding: 2rem;
      pointer-events: none;
    `;

    overlay.innerHTML = `
      <div style="
        background: rgba(0,0,0,0.85);
        padding: 1.5rem 2rem;
        border-radius: 12px;
        max-width: 90%;
        pointer-events: auto;
        box-shadow: 0 0 20px rgba(0,0,0,0.8);
      ">
        ⚠️ <strong style="font-size: 1.2em;">Sandbox Detected</strong><br><br>
        This page is being loaded inside an <strong>iframe with sandbox</strong> enabled.<br>
        Please <strong>remove the sandbox attribute</strong> to display this content properly.
      </div>
    `;

    document.body.appendChild(overlay);
  }

  window.addEventListener('load', function () {
    if (sandboxDetected) {
      showWarningOverlay();
    }
  });
})();
