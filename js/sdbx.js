<script>
(function () {
  let sandboxed = false;

  try {
    // Coba tes apakah localStorage dan document.cookie dapat digunakan
    localStorage.setItem('sandboxTest', '1');
    const testCookie = document.cookie;

    // Jika tidak bisa akses window.top (tapi domain beda), jangan langsung anggap sandbox
    // Kita hanya tandai sandboxed jika fitur browser nonaktif
    if (!localStorage.getItem('sandboxTest') || typeof testCookie === 'undefined') {
      sandboxed = true;
    }

    // Cleanup
    localStorage.removeItem('sandboxTest');

  } catch (e) {
    // Gagal akses property penting → kemungkinan besar sandbox
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
        <h2>⚠️ Halaman ini dibatasi sandbox</h2>
        <p>Jika Anda meng-iframe halaman ini, harap jangan gunakan atribut <code>sandbox</code> agar fitur berjalan dengan baik.</p>
      </div>
    `;

    document.body.appendChild(overlay);
  }
})();
</script>
