(function () {
    function isSandboxedIframe() {
        try {
            return window.self !== window.top && !window.top.location.href;
        } catch (e) {
            return true; // error mengakses top → kemungkinan sandbox
        }
    }

    if (isSandboxedIframe()) {
        // tampilkan overlay warning
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.zIndex = "99999";
        overlay.style.background = "rgba(0,0,0,0.85)";
        overlay.style.color = "#fff";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.fontSize = "20px";
        overlay.innerText = "⚠️ Halaman ini tidak dapat dimuat dengan sandbox. Harap izinkan akses penuh.";
        document.body.appendChild(overlay);
    }
})();
