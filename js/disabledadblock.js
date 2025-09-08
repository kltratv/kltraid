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
                padding: 30px;
                text-align: center;
                max-width: 500px;
                border-radius: 20px;
                margin: 20px;
                min-height: 280px;
                font-size: 1.2em;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                border: 4px solid #d1d1d1;
                background: linear-gradient(135deg, #ffffff, #f2f2f2);
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                color: #333;
                transition: all 0.3s ease;
            ">
                <h2 style="
                    margin-bottom: 15px;
                    font-weight: 800;
                    font-size: 1.8em;
                    color: #d32f2f;
                    text-shadow: 1px 1px #fff;
                ">🚫 AdBlocker Detected!</h2>
                
                <p style="margin-bottom: 20px;">
                    Ads help us keep this site free. Please consider disabling your ad blocker or adding us to your whitelist 💖
                </p>
                
                <button id="refresh-page" style="
                    padding: 12px 25px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    background: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: background 0.3s ease, transform 0.2s ease;
                " 
                onmouseover="this.style.background='#43a047'; this.style.transform='scale(1.05)'"
                onmouseout="this.style.background='#4CAF50'; this.style.transform='scale(1)'">
                    ✅ I Disabled AdBlock
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
