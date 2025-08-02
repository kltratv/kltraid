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
      background-color: rgba(0, 0, 0, 0.95);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      z-index: 2147483647;
      text-align: center;
      padding: 2rem;
      pointer-events: all;
    `;

    overlay.innerHTML = `
      <div>
        ⚠️ <strong>Sandbox Detected</strong><br><br>
        This page is being loaded inside an <strong>iframe with sandbox</strong> enabled.<br>
        Please <strong>remove the sandbox attribute</strong> if you wish to embed this content properly.
      </div>
    `;

    document.body.appendChild(overlay);
  }

  window.addEventListener('load', function () {
    if (sandboxDetected) {
      showWarningOverlay("⚠️ Sandbox is enabled. Please remove the sandbox attribute to view this content.");
    }
  });
})();
