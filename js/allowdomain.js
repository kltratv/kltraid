// Daftar origin yang diizinkan melakukan iframe
const allowedOrigins = [
  "https://kltraid.pages.dev/",
  "https://yallashoot-ab01.blogspot.com",
  "https://bikinbaru96.blogspot.com"
];

// Fungsi untuk mendapatkan origin dari referrer atau top
function getReferrerOrigin() {
    try {
        if (document.referrer) {
            return new URL(document.referrer).origin;
        }
    } catch (e) {
        console.error("Gagal parsing document.referrer:", e);
    }

    // Fallback: coba ambil origin dari window.top jika tidak cross-origin
    try {
        return window.top.location.origin;
    } catch (e) {
        console.warn("Tidak bisa akses window.top.origin (kemungkinan cross-origin).");
        return null;
    }
}

// Fungsi untuk memeriksa apakah halaman sedang dimuat di dalam iframe
function checkAndRedirect() {
    if (window.top !== window.self) {
        const origin = getReferrerOrigin();

        if (origin) {
            console.log("Origin yang dicek:", origin);

            if (!allowedOrigins.includes(origin)) {
                console.log("Origin tidak diizinkan, redirecting...");
                window.top.location = "https://kltraid.pages.dev/"; // Ganti dengan URL tujuan yang diinginkan
            } else {
                console.log("Origin diizinkan, tidak di-redirect.");
            }
        } else {
            console.log("Tidak bisa menentukan origin, iframe dibiarkan.");
        }
    }
}

// Periksa setiap 30 detik
setInterval(checkAndRedirect, 30000);

// Pengecekan pertama setelah 5 menit
setTimeout(checkAndRedirect, 300000);
