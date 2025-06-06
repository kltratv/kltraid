(function () {
    if (window.top !== window.self) {
        const allowedOrigins = [
            'https://kltraid.pages.dev',
            'https://bikinbaru96.blogspot.com',
            'https://kltratvqq.blogspot.com',
            'https://kltra-tv.blogspot.com'
        ];

        const referrer = document.referrer;

        function getOrigin(url) {
            try {
                const parsed = new URL(url);
                return parsed.origin;
            } catch (e) {
                return '';
            }
        }

        const refOrigin = getOrigin(referrer);

        if (!refOrigin || !allowedOrigins.includes(refOrigin)) {
            setTimeout(() => {
                window.top.location = 'https://kltraid.pages.dev/';
            }, 30000); // 30 detik
        }
    }
})();
