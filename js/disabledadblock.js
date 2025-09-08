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
        const lang = (navigator.language || navigator.userLanguage).toLowerCase();
        
        // Translation map
        const translations = {
            en: { title: "Disabled Your Adblock", message: "Don't Use DNS", button: "Reload" },
            id: { title: "Nonaktifkan Adblock Anda", message: "Jangan Gunakan DNS", button: "Muat Ulang" },
            es: { title: "Desactiva tu Adblock", message: "No uses DNS", button: "Recargar" },
            fr: { title: "Désactivez votre Adblock", message: "N'utilisez pas DNS", button: "Recharger" },
            de: { title: "Deaktiviere deinen Adblocker", message: "Verwenden Sie kein DNS", button: "Neu laden" },
            pt: { title: "Desative seu Adblock", message: "Não use DNS", button: "Recarregar" },
            ja: { title: "Adblockを無効にしてください", message: "DNSを使用しないでください", button: "再読み込み" },
            ko: { title: "Adblock을 비활성화하세요", message: "DNS를 사용하지 마세요", button: "새로고침" },
            zh: { title: "请禁用广告拦截器", message: "不要使用DNS", button: "重新加载" }
        };
        
        // Use the first 2 characters of lang to get translation
        const locale = lang.slice(0, 2);
        const content = translations[locale] || translations['en'];
        
        overlay.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                text-align: center;
                max-width: 250px;
                border-radius: 12px;
                margin: 20px auto;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: #0d0d0d;
                color: #e0e0e0;
                box-shadow: 0 0 15px rgba(0, 255, 170, 0.1);
            ">
                <div style="font-size: 1.3em; font-weight: bold; color: #00ffcc; margin-bottom: 6px;">
                    ${content.title}
                </div>
                <div style="font-size: 0.90em; margin-bottom: 20px;">
                    ${content.message}
                </div>
                <button id="refresh-page" style="
                    padding: 8px 16px;
                    font-size: 10px;
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
                    ${content.button}
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
