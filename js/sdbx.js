(function () {
  let sandboxDetected = false;

  try {
    window.top.location.href;
  } catch (e) {
    sandboxDetected = true;
  }

  function showWarningOverlay(message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      z-index: 999999;
      text-align: center;
      padding: 2rem;
      font-family: sans-serif;
    `;
    overlay.innerHTML = `<div>${message}</div>`;
    document.body.appendChild(overlay);
  }

  window.addEventListener('load', function () {
    console.log("[sdbx.js] Sandbox Detected?", sandboxDetected);
    if (sandboxDetected) {
      showWarningOverlay("⚠️ This page is loaded inside an iframe with sandbox enabled. Please remove the sandbox attribute to embed it properly.");
    }
  });
})();
