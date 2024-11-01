// Tabel substitusi untuk dekripsi
const substitutionTable = {
  'z': 'a', 'y': 'b', 'x': 'c', 'w': 'd', 'v': 'e',
  'u': 'f', 't': 'g', 's': 'h', 'r': 'i', 'q': 'j',
  'p': 'k', 'o': 'l', 'n': 'm', 'm': 'n', 'l': 'o',
  'k': 'p', 'j': 'q', 'i': 'r', 'h': 's', 'g': 't',
  'f': 'u', 'e': 'v', 'd': 'w', 'c': 'x', 'b': 'y',
  'a': 'z', '9': '0', '8': '1', '7': '2', '6': '3',
  '5': '4', '4': '5', '3': '6', '2': '7', '1': '8',
  '0': '9'
};

// Fungsi dekripsi untuk string
function substituteDecrypt(text) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // Cek apakah karakter ada di tabel substitusi
    if (substitutionTable[char]) {
      decryptedText += substitutionTable[char];
    } else {
      decryptedText += char; // Pertahankan karakter yang tidak ada di tabel
    }
  }
  return decryptedText;
}

// Fungsi rekursif untuk mendekripsi semua kunci dan nilai dalam objek JSON
function decryptEventData(data) {
  if (typeof data === 'string') {
    return substituteDecrypt(data); // Dekripsi string
  } else if (Array.isArray(data)) {
    return data.map(decryptEventData); // Dekripsi setiap elemen dalam array
  } else if (typeof data === 'object' && data !== null) {
    const decryptedObject = {};
    for (const key in data) {
      decryptedObject[substituteDecrypt(key)] = decryptEventData(data[key]); // Dekripsi kunci dan nilai
    }
    return decryptedObject;
  }
  return data; // Jika bukan string, array, atau objek, kembalikan data asli
}

// Dekripsi data eventData secara otomatis setelah dimuat ke variabel baru
const decryptedEventData = decryptEventData(eventData);
