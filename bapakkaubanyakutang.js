function substituteDecrypt(text) {
  var substitutionTable = {
    'z': 'a', 'y': 'b', 'x': 'c', 'w': 'd', 'v': 'e',
    'u': 'f', 't': 'g', 's': 'h', 'r': 'i', 'q': 'j',
    'p': 'k', 'o': 'l', 'n': 'm', 'm': 'n', 'l': 'o',
    'k': 'p', 'j': 'q', 'i': 'r', 'h': 's', 'g': 't',
    'f': 'u', 'e': 'v', 'd': 'w', 'c': 'x', 'b': 'y',
    'a': 'z', '9': '0', '8': '1', '7': '2', '6': '3',
    '5': '4', '4': '5', '3': '6', '2': '7', '1': '8',
    '0': '9'
  };

  var decryptedText = '';
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    // Cek apakah karakter adalah huruf kecil atau angka yang perlu didekripsi
    if (substitutionTable[char.toLowerCase()]) {
      // Ambil hasil substitusi dan sesuaikan kapitalisasi
      var decryptedChar = substitutionTable[char.toLowerCase()];
      decryptedText += (char === char.toUpperCase()) ? decryptedChar.toUpperCase() : decryptedChar;
    } else {
      // Pertahankan karakter yang bukan huruf kecil atau angka
      decryptedText += char;
    }
  }
  return decryptedText;
}
