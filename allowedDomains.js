// Daftar allowed domains (tidak termasuk domain utama)
const allowedDomains = [
  'https://akusukagratisanlo.blogspot.com',
  'https://www.kltraid.online',
  'https://bikinbaru96.blogspot.com'
];

// Ambil referer dari dokumen
const referer = document.referrer;

// Jika tidak ada referer atau referer tidak sesuai, lakukan redirect
if (!referer || !allowedDomains.some(domain => referer.startsWith(domain))) {
  window.location.href = 'https://kltraid.pages.dev';
}
