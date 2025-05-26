    let pollingInterval = null;
    let pollingMode = "fast"; // "fast" or "low"
    let fastPollingTimeout = null;

    function clearAllPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        if (fastPollingTimeout) clearTimeout(fastPollingTimeout);
    }

    function startFastPolling() {
        clearAllPolling();
        pollingMode = "fast";
        loadEventsFromJSON(); // langsung panggil sekali
        pollingInterval = setInterval(loadEventsFromJSON, 5000); // tiap 5 detik
        fastPollingTimeout = setTimeout(() => {
            startLowPolling();
        }, 60000); // 1 menit kemudian ganti ke low
        console.log("[Polling] Fast polling dimulai");
    }

    function startLowPolling() {
        clearAllPolling();
        pollingMode = "low";
        pollingInterval = setInterval(loadEventsFromJSON, 600000); // 10 menit
        console.log("[Polling] Beralih ke low polling (10 menit)");
    }
  
    window.addEventListener('DOMContentLoaded', async () => {
        await loadEventsFromJSON(); // 🔁 Muat sekali
        await loadChannelsFromJSON();

        startFastPolling(); // ⬅️ Aktifkan fast polling langsung

        // 🔄 Restore session untuk event
        const storedActiveEventId = sessionStorage.getItem('activeEventId');
        const storedActiveServerUrl = sessionStorage.getItem(`activeServerUrl_${storedActiveEventId}`);

        if (storedActiveEventId && storedActiveServerUrl) {
            const activeContainer = document.querySelector(`.event-container[data-id="${storedActiveEventId}"]`);
            if (activeContainer) {
                const storedButton = activeContainer.querySelector(`.server-button[data-url="${storedActiveServerUrl}"]`);
                if (storedButton) {
                    selectServerButton(storedButton);
                }
                loadEventVideo(activeContainer, storedActiveServerUrl, false);
                return;
            }
        }

        // 🔄 Restore session untuk channel
        const storedActiveChannelId = sessionStorage.getItem('activeChannelId');
        if (storedActiveChannelId) {
            const activeChannel = document.querySelector(`.channel-container[data-id="${storedActiveChannelId}"]`);
            if (activeChannel) {
                activeChannel.classList.add('selected');
                loadEventVideo(activeChannel);
            }
        }
    });
