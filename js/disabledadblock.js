(function () {
    function detectElementBlocking() {
        return new Promise((resolve) => {
            let bait = document.createElement("div");
            bait.className = "adsbox ad-banner ad-unit"; // Typical adblock targets
            bait.style.width = "1px";
            bait.style.height = "1px";
            bait.style.position = "absolute";
            bait.style.left = "-9999px";
            bait.style.visibility = "hidden";
            document.body.appendChild(bait);

            setTimeout(() => {
                const isBlocked = !bait || bait.offsetParent === null || window.getComputedStyle(bait).display === "none";
                document.body.removeChild(bait);
                resolve(isBlocked);
            }, 100);
        });
    }

    function detectDNSAdBlock() {
        return fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: "HEAD", mode: "no-cors" })
            .then(() => false) // Accessible = not blocked
            .catch(() => true); // Blocked = likely DNS adblock
    }

    function showAdblockPopup() {
        let overlay = document.createElement("div");
        overlay.id = "adblock-overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";
        overlay.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                max-width: 250px;
                border-radius: 12px;
                margin: 20px auto;
                min-height: 180px;
                font-size: 0.95em;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                border: 1px solid #444;
                background: #1c1c1c;
                color: #e0e0e0;
                box-shadow: 0 0 15px rgba(0, 255, 170, 0.15);
            ">
                <h3 style="color: #00ffcc; margin-bottom: 10px;">Disabled Your Adblock</h3>
                <p style="margin: 4px 0;">Don't Use DNS</p>
                <p style="margin: 4px 0;">Try Using Chrome</p>
        
                <button id="refresh-page" style="
                    margin-top: 15px;
                    padding: 8px 16px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    background: #00ffcc;
                    color: #000;
                    border: none;
                    border-radius: 6px;
                    box-shadow: 0 0 10px rgba(0,255,170,0.3);
                    transition: all 0.2s ease;
                " 
                onmouseover="this.style.background='#00e6b8'; this.style.transform='scale(1.05)'"
                onmouseout="this.style.background='#00ffcc'; this.style.transform='scale(1)'">
                    Reload
                </button>
            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById("refresh-page").addEventListener("click", function () {
            location.reload();
        });
    }

    window.addEventListener("load", async () => {
        const adBlockDetected = await detectElementBlocking();
        const dnsBlocked = await detectDNSAdBlock();

        if (adBlockDetected || dnsBlocked) {
            showAdblockPopup();
        }
    });
})();
