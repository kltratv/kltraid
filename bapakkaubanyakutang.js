// Tabel substitusi untuk dekripsi dan fungsi terkait
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

function substituteDecrypt(text) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (substitutionTable[char]) {
      decryptedText += substitutionTable[char];
    } else {
      decryptedText += char;
    }
  }
  return decryptedText;
}

function decryptEventData(data) {
  if (typeof data === 'string') {
    return substituteDecrypt(data);
  } else if (Array.isArray(data)) {
    return data.map(decryptEventData);
  } else if (typeof data === 'object' && data !== null) {
    const decryptedObject = {};
    for (const key in data) {
      decryptedObject[substituteDecrypt(key)] = decryptEventData(data[key]);
    }
    return decryptedObject;
  }
  return data;
}

// Dekripsi data `eventData` setelah diimpor
const decryptedEventData = decryptEventData(eventData);

function createEventContainers() {
    const eventsContainer = document.getElementById("events-container");
    eventsContainer.innerHTML = "";

    decryptedEventData.forEach(event => {
        const eventContainer = document.createElement("div");
        eventContainer.className = "event-container";
        eventContainer.setAttribute("data-id", event.dataId);
        eventContainer.setAttribute("data-url", event.dataUrl);
        eventContainer.setAttribute("data-servers", JSON.stringify(event.servers));
        eventContainer.setAttribute("data-duration", event.duration);

        eventContainer.innerHTML = `
            <h2><img src="${event.sportIcon}" alt="Sport Icon" class="sport-icon"><span class="event-name">${event.eventName}</span></h2>
            <div class="team">
                <img src="${event.team1.logo}" alt="${event.team1.name}" class="team-logo team1-logo">
                <span class="team1-name">${event.team1.name}</span>
            </div>
            <div class="match-date">${event.eventDate}</div>
            <div class="match-time">${event.eventTime}</div>
            <div class="live-label" style="display:none;">Live</div>
            <div class="team">
                <img src="${event.team2.logo}" alt="${event.team2.name}" class="team-logo team2-logo">
                <span class="team2-name">${event.team2.name}</span>
            </div>
            <div class="server-buttons" style="display:none;">
                <div class="instruction">You can select a server stream:</div>
                <div class="buttons-container"></div>
            </div>
            <div class="countdown-wrapper" id="countdown-${event.dataId}" style="display:none;">
                <div class="countdown-title">Event will start in:</div>
                <div class="countdown-timer"></div>
            </div>
        `;
        eventsContainer.appendChild(eventContainer);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createEventContainers();
    setupEvents();
});
