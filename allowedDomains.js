// Daftar domain yang diizinkan
const allowedDomains = [
  'https://akusukagratisanlo.blogspot.com/',
  'https://www.kltraid.online/',
  'https://bikinbaru96.blogspot.com/',
  'https://yallashoot-ab01.blogspot.com/'
];

// Ambil referer dari dokumen
const referer = document.referrer;

// Cek apakah halaman ini diakses langsung atau dari allowed domain
if (!referer || !allowedDomains.some(domain => referer.startsWith(domain))) {
  // Jika tidak ada referer (akses langsung) atau referer tidak sesuai, redirect ke halaman utama
  window.location.href = 'https://kltraid.pages.dev/';
}
