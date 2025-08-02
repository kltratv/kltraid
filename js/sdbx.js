(function () {
  function sandboxStrictCheck() {
    try {
      const topLoc = window.top.location;
      return false; // Akses ke top.location berhasil → BUKAN sandbox
    } catch (e) {
      return true; // Gagal akses → sandbox aktif
    }
  }

  if (sandboxStrictCheck()) {
    document.body.innerHTML = '';
    document.body.style.background = '#000';
    document.body.style.color = '#fff';
    document.body.style.font = '16px Teko, sans-serif';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.innerText = '⚠️ Sandbox iframe detected. Please remove sandbox attribute to view this content.';
  }
})();
