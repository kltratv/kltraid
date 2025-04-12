<script>
(function() {
  // Cek jika halaman ini sedang di-iframe
  if (window !== window.top) {
    let sandboxDetected = false;

    try {
      // Sandbox biasanya memblok akses ke top location
      window.top.location.toString();
    } catch (e) {
      sandboxDetected = true;
    }

    // Bisa juga cek apakah fitur tertentu dinonaktifkan oleh sandbox
    if (!window.parent || !window.parent.postMessage) {
      sandboxDetected = true;
    }

    // Jika sandbox terdeteksi, redirect
    if (sandboxDetected) {
      window.location.href = "https://www.google.com/";
    }
  }
})();
</script>
