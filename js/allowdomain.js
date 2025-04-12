// Daftar domain yang diizinkan melakukan iframe
const allowedDomains = ["kltraid.pages.dev", "yallashoot-ab01.blogspot.com", "bikinbaru96.blogspot.com"];

// Fungsi untuk memeriksa apakah halaman sedang dimuat di dalam iframe
function checkAndRedirect() {
    if (window.top !== window.self) {
        // Periksa apakah referrer ada
        if (document.referrer) {
            const referrerDomain = new URL(document.referrer).hostname;
            
            // Log referrer untuk debugging
            console.log("Referrer Domain: ", referrerDomain);

            // Periksa apakah domain referrer ada di daftar allowedDomains
            if (!allowedDomains.includes(referrerDomain)) {
                console.log("Domain tidak diizinkan, redirecting...");
                // Redirect jika domain tidak diizinkan
                window.top.location = "https://kltraid.pages.dev/"; // Ganti dengan URL tujuan yang diinginkan
            } else {
                console.log("Domain diizinkan, tidak di-redirect.");
            }
        } else {
            // Referrer kosong, bisa disebabkan oleh no-referrer atau direktori kosong
            console.log("Referrer kosong, redirecting...");
            window.top.location = "https://kltraid.pages.dev/"; // Redirect jika referrer kosong
        }
    }
}

// Periksa setiap 30 detik (30000 ms)
setInterval(checkAndRedirect, 30000);

// Pengecekan pertama setelah 5 menit
setTimeout(checkAndRedirect, 300000);
