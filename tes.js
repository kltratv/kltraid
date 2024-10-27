(function() {
  const allowedDomains = [
    'https://www.kltraid.online',
    'https://akusukagratisanlo.blogspot.com',
    'https://bikinbaru96.blogspot.com',
    'https://kltraid.pages.dev'
  ];

  // Check if the script is being accessed directly in a browser tab
  if (window.top === window.self) {
    // This means the script is being accessed directly
    const referer = document.referrer;

    // Redirect if no valid referer or if accessed directly without an allowed referer
    if (!referer || !allowedDomains.some(domain => referer.startsWith(domain))) {
      window.location.href = 'https://kltraid.pages.dev';
      return;
    }
  }

  // Your decryption logic below
  // Decryption function for hosted environment (JavaScript)
  function decryptUrl(url) {
    // Check if URL has the _token
    if (!url.endsWith('_token=989324ehhedfkhjswf32423kjhksdfgsdge425t34t4e')) {
      return url; // Skip URLs without the token
    }

    // Remove token from URL
    url = url.replace('_token=989324ehhedfkhjswf32423kjhksdfgsdge425t34t4e', '');

    // Extract protocol
    var protocol = extractProtocol(url);

    // Extract domain, path, and extension positions
    var { domainAndPath, excludedExtensions, extensionPositions } = extractDomainAndPathAndExtensionPositions(url);

    // Decrypt domain and path without protocol and extensions using substitution table
    var decryptedDomainAndPath = substituteDecrypt(domainAndPath);

    // Reinsert extensions at their original positions
    var newUrl = insertExtensionsBack(decryptedDomainAndPath, excludedExtensions, extensionPositions);

    // Recombine with protocol
    newUrl = protocol + newUrl;

    return newUrl;
  }

  // Function to extract protocol (https:// or http://)
  function extractProtocol(url) {
    var match = url.match(/https?:\/\//);
    return match ? match[0] : '';
  }

  // Function to extract domain, path, and extensions, and their positions
  function extractDomainAndPathAndExtensionPositions(url) {
    // Remove protocol from URL
    var protocolRegex = /^https?:\/\//i;
    var domainAndPath = url.replace(protocolRegex, '');

    // Find known extensions and exclude them from decryption
    var extensionsPattern = /(\.html|\.php|\.m3u8|\.css|\.js|\.xml|\.json)/gi;
    var excludedExtensions = [];
    var extensionPositions = [];

    var match;
    while ((match = extensionsPattern.exec(domainAndPath)) !== null) {
      excludedExtensions.push(match[0]); // Store the extension
      extensionPositions.push(match.index); // Store the position of the extension
      domainAndPath = domainAndPath.replace(match[0], ''); // Remove extension from domainAndPath for decryption
    }

    return { domainAndPath, excludedExtensions, extensionPositions };
  }

  // Function to reinsert extensions at their original positions
  function insertExtensionsBack(decryptedDomainAndPath, excludedExtensions, extensionPositions) {
    var result = decryptedDomainAndPath;
    for (var i = 0; i < excludedExtensions.length; i++) {
      var position = extensionPositions[i];
      var extension = excludedExtensions[i];
      result = result.slice(0, position) + extension + result.slice(position);
    }
    return result;
  }

  // Function to decrypt using a substitution table
  function substituteDecrypt(text) {
    var substitutionTable = {
      'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
      'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
      'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
      'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
      'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
      'z': 'a', '0': '9', '1': '8', '2': '7', '3': '6',
      '4': '5', '5': '4', '6': '3', '7': '2', '8': '1',
      '9': '0'
    };

    var result = '';
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      result += substitutionTable[char] || char; // If not in table, keep character unchanged
    }
    return result;
  }
})();
