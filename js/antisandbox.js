(function () {
    function isSandboxedIframe() {
        // Kondisi umum iframe
        const isInIframe = window.self !== window.top;

        // frameElement null atau error → kemungkinan sandbox
        let isSandboxed = false;
        try {
            isSandboxed = !window.frameElement || window.frameElement.hasAttribute("sandbox");
        } catch (e) {
            isSandboxed = true;
        }

        return isInIframe && isSandboxed;
    }

    if (isSandboxedIframe()) {
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
        overlay.style.textAlign = "center";
        overlay.style.padding = "30px";
        overlay.innerText = "⚠️ Halaman ini dimuat dalam sandboxed iframe.\n\nUntuk memuat konten ini, iframe harus tanpa atribut sandbox.";
        document.body.appendChild(overlay);
    }
})();
