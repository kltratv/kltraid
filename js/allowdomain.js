export const allowedDomains = [
    'https://kltraid.pages.dev',
    'https://bikinbaru96.blogspot.com',
    'https://yallashoot-ab01.blogspot.com',
    'https://kltratv001.blogspot.com',
    'http://localhost'
];

// Auto-generate allowed hosts dari allowedDomains
export const allowedHosts = allowedDomains.map(url => {
    try {
        return new URL(url).hostname;
    } catch {
        return null;
    }
}).filter(Boolean);

export const fallbackRedirect = 'https://akusukagratisanlo.blogspot.com';
