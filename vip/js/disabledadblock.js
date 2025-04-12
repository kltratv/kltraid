  (function () {
    function detectAdBlock() {
        return new Promise((resolve) => {
            let bait = document.createElement("div");
            bait.className = "adsbox ad-banner ad-unit"; // Common blocked ad-related class names
            bait.style.width = "1px";
            bait.style.height = "1px";
            bait.style.position = "absolute";
            bait.style.left = "-9999px";
            bait.style.visibility = "hidden"; // Make it harder to detect by AdBlock itself
            document.body.appendChild(bait);

            setTimeout(() => {
                let isBlocked = !bait || bait.offsetParent === null || window.getComputedStyle(bait).display === "none";
                document.body.removeChild(bait);
                resolve(isBlocked);
            }, 100); // Reduced timeout for better performance
        });
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
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; max-width: 500px; border-radius: 10px; margin: 20px; min-height: 250px; font-size: 1.2em; font-family: system-ui; border: 5px solid #b3b3b3; background: #ffffff; color: black;">
                <h2 style="margin: 0px 0px 15px; font-weight: 700;">AdBlocker Detected!</h2>
                <p>We rely on ads to keep our website free. Please disable your ad blocker or whitelist our site.</p>
                <button id="refresh-page" style="padding: 10px 20px; font-size: 16px; cursor: pointer; background: #1a73e8; color: white; border-radius: 10px; margin: 15px 0px 0px;">I Disabled AdBlock</button>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById("refresh-page").addEventListener("click", function () {
            location.reload();
        });
    }

    window.addEventListener("load", () => {
        detectAdBlock().then((adBlockDetected) => {
            if (adBlockDetected) {
                showAdblockPopup();
            }
        });
    });
})();
