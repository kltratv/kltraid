function createEventContainers() {
    const eventsContainer = document.getElementById("events-container");
    eventsContainer.innerHTML = "";

    eventData.forEach(event => {
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
