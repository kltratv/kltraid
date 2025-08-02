(function () {
  let sandboxDetected = false;
  try {
    const topTest = window.top.location.href;
    window.top.location = window.top.location;
  } catch (e) {
    sandboxDetected = true;
  }

  const originalWindowOpen = window.open;
  let popunderDetected = false;

  window.open = function () {
    popunderDetected = true;
    return null;
  };

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
    `;
    overlay.innerHTML = `<div>${message}</div>`;
    document.body.appendChild(overlay);
  }

  window.addEventListener('load', function () {
    setTimeout(() => {
      if (sandboxDetected) {
        showWarningOverlay("⚠️ This page is loaded inside an iframe with sandbox enabled. Please remove the sandbox attribute if you wish to embed this content properly.");
      } else if (popunderDetected) {
        showWarningOverlay("⚠️ Suspicious behavior detected (popunder blocked). Please use this page responsibly.");
      }
    }, 1000);
  });
})();
