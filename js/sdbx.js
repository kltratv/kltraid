(function () {
  let sandboxed = false;

  // Deteksi window.top yang tidak bisa diakses → bisa jadi sandbox atau cross-origin
  let isCrossOrigin = false;
  try {
    // Jika ini sukses, kita bukan sandbox dan same-origin
    const test = window.top.location.href;
  } catch (e) {
    isCrossOrigin = true;
  }

  // Sekarang cek apakah kita bisa set properti ke top → ini akan gagal di sandbox meskipun same-origin
  try {
    window.top.testProp = 123;
    if (window.top.testProp !== 123) {
      sandboxed = true;
    }
  } catch (e) {
    sandboxed = true;
  }

  if (sandboxed && !isCrossOrigin) {
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
        <p>Iframe ini menggunakan atribut <code>sandbox</code> yang membatasi fungsionalitas. Harap hapus <code>sandbox</code>.</p>
      </div>
    `;
    document.body.appendChild(overlay);
  }
})();
