// Tabel substitusi balik untuk mendekripsi data
function substituteDecrypt(text) {
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

    return text.split('').map(char => {
        // Dekripsi hanya huruf dan angka, biarkan simbol dan emotikon tetap sama
        if (/[a-z0-9]/i.test(char)) {
            return substitutionTable[char.toLowerCase()] || char;
        }
        return char; // Biarkan karakter tetap sama jika bukan huruf atau angka
    }).join('');
}

// Fungsi rekursif untuk mendekripsi setiap nilai dalam objek eventData
function decryptEventData(data) {
    if (typeof data === 'string') {
        return substituteDecrypt(data); // Dekripsi string
    } else if (Array.isArray(data)) {
        return data.map(decryptEventData); // Dekripsi setiap elemen dalam array
    } else if (typeof data === 'object' && data !== null) {
        const decryptedObj = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                // Dekripsi kunci dan nilai
                const decryptedKey = substituteDecrypt(key);
                decryptedObj[decryptedKey] = decryptEventData(data[key]);
            }
        }
        return decryptedObj;
    }
    return data;
}

// Dekripsi eventData terenkripsi
const decryptedEventData = decryptEventData(eventData);
console.log("Decrypted Event Data:", decryptedEventData);
