(function () {
  let sandboxDetected = false;

  try {
    sandboxDetected = window.top !== window.self;
  } catch (e) {
    sandboxDetected = true;
  }

  function showWarningOverlay(message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(5px);
      color: #fff;
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999999;
      text-align: center;
      padding: 2rem;
      font-size: 1rem;
    `;
    overlay.innerHTML = `
      <div style="max-width: 400px;">
        ⚠️ <strong>${message}</strong>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  function detectDevTools() {
    const threshold = 160;
    const start = new Date();
    debugger;
    const end = new Date();
    return end - start > threshold;
  }

  function checkDevToolsPeriodically() {
    setInterval(() => {
      if (detectDevTools()) {
        showWarningOverlay("DevTools Detected. Please do not inspect or modify this page.");
      }
    }, 1000);
  }

  window.addEventListener('load', () => {
    if (sandboxDetected) {
      showWarningOverlay("⚠️ This page is in an iframe with sandbox enabled. Please remove sandbox to display properly.");
    } else {
      checkDevToolsPeriodically();
    }
  });
})();
