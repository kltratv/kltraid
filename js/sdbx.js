(function () {
  let sandboxed = false;

  try {
    // Sandbox tanpa "allow-top-navigation" akan blok ini
    window.top.location.href;
    // Kalau berhasil, aman
  } catch (e) {
    sandboxed = true;
  }

  if (sandboxed) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      font-family: sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      z-index: 99999;
    `;
    overlay.innerHTML = `
      <div>
        <h2>⚠️ Halaman dibatasi sandbox</h2>
        <p>Mohon hapus atribut <code>sandbox</code> dari tag <code>iframe</code> agar halaman berfungsi optimal.</p>
      </div>
    `;
    document.body.appendChild(overlay);
  }
})();
