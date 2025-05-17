    var intervals = {}; // Object to keep track of intervals
    var activeEventId = null; // Track the currently active event
    const fallbackURL = "https://bikinbaru96.blogspot.com/2024/06/blog-post_13.html"; // URL fallback jika URL tidak ditemukan

    async function loadChannelsFromJSON() {
        try {
            const res = await fetch('https://content.elutuna.workers.dev/channel.json');
            if (!res.ok) throw new Error('Failed to load channel.json');
            const data = await res.json();
            const container = document.querySelector('#live-tv #content');
            container.innerHTML = "";

            data.forEach(channel => {
                const html = `
	        <div class="channel-container" data-id="${channel.id}" data-url="${channel.url}">
	          <div class="logo-container">
	            <img src="${channel.logo}" alt="Channel Logo" class="logo">
	          </div>
	          <div class="info-container">
	            <h3 class="channel-name">${channel.name}</h3>
	            <p class="status">${channel.status}</p>
	          </div>
	        </div>
	      `;
                container.insertAdjacentHTML('beforeend', html);
            });

            // ⬇️ Tambahkan spacer di sini agar scroll tidak terpotong
            if (!container.querySelector('#spacer')) {
                container.insertAdjacentHTML('beforeend', '<div id="spacer"></div>');
            }

            setupChannels(); // aktifkan klik listener setelah render
        } catch (error) {
            console.error('Error loading channels:', error);
        }
    }

async function loadEventsFromJSON() {
    const playerBaseUrl = "https://bikinbaru96.blogspot.com/p/sdplayer.html?key=";

    const [eventRes, playerRes] = await Promise.all([
        fetch('https://content.elutuna.workers.dev/event.json'),
        fetch('https://content.elutuna.workers.dev/sdplayer.json')
    ]);

    const events = await eventRes.json();
    const playerList = await playerRes.json();
    const playerMap = {};

    playerList.forEach(item => {
        if (item.id && Array.isArray(item.servers)) {
            playerMap[item.id] = item.servers;
        }
    });

    const container = document.querySelector('#live-event #content');
    container.innerHTML = "";

    events.forEach(event => {
        const servers = playerMap[event.id] || [];
        const firstKey = servers[0]?.key || '';
        const defaultUrl = firstKey ? `${playerBaseUrl}${firstKey}` : '';
        const serversForAttribute = servers.map(s => ({
            key: s.key,
            label: s.label,
            url: `${playerBaseUrl}${s.key}`
        }));
        const encodedServers = JSON.stringify(serversForAttribute).replace(/"/g, '&quot;');

        const html = `
    <div class="event-container"
         data-id="${event.id}"
         data-url="${defaultUrl}"
         data-servers="${encodedServers}"
         data-duration="${event.duration}">
         
        <h2><img src="${event.icon}" class="sport-icon">${event.league}</h2>
        
        <div class="team">
            <img src="${event.team1.logo}" class="team-logo" alt="${event.team1.name}">
            <span>${event.team1.name}</span>
        </div>
        
        <div class="kickoff-match-date">${event.kickoff_date}</div>
        <div class="kickoff-match-time">${event.kickoff_time}</div>
        <div class="match-date" style="display:none;" data-original-date="${event.match_date}">${event.match_date}</div>
        <div class="match-time" style="display:none;" data-original-time="${event.match_time}">${event.kickoff_time}</div>
        <div class="live-label" style="display:none;">Live</div>
        
        <div class="team">
            <img src="${event.team2.logo}" class="team-logo" alt="${event.team2.name}">
            <span>${event.team2.name}</span>
        </div>
        
        <div class="server-buttons" style="display:none;">
            <div class="instruction">You can select a server stream:</div>
            <div class="buttons-container"></div>
        </div>
        
        <div class="countdown-wrapper" id="countdown-${event.id}" style="display:none;">
            <div class="countdown-title">Event will start in:</div>
            <div class="countdown-timer"></div>
        </div>
    </div>
    `;

        container.insertAdjacentHTML('beforeend', html);

        // Inject tombol server berbasis key → player page
        const eventContainer = container.querySelector(`.event-container[data-id="${event.id}"]`);
        const buttonContainer = eventContainer.querySelector('.buttons-container');

        servers.forEach((server, index) => {
            const div = document.createElement('div');
            div.className = 'server-button';
            if (index === 0) div.classList.add('active');
            div.setAttribute('data-url', `${playerBaseUrl}${server.key}`);
            div.textContent = server.label;
            buttonContainer.appendChild(div);
        });
    });

    // Spacer agar tidak terpotong scroll
    if (!container.querySelector('#spacer')) {
        container.insertAdjacentHTML('beforeend', '<div id="spacer"></div>');
    }

    setupEvents();

    // Restore session (langsung tanpa decrypt)
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
        }
    }
}

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function setupEvents() {
        var eventContainers = document.querySelectorAll('.event-container');
        var validEventIds = [];

        eventContainers.forEach(function(container) {
            var id = container.getAttribute('data-id');
            validEventIds.push(id);

            // Event time (match-date and match-time)
            var matchDate = container.querySelector('.match-date').textContent.trim();
            var matchTime = container.querySelector('.match-time').textContent.trim();
            var eventTime = parseEventDateTime(matchDate, matchTime);

            // Kickoff event time (kickoff-match-date and kickoff-match-time)
            var kickoffDate = container.querySelector('.kickoff-match-date').textContent.trim();
            var kickoffTime = container.querySelector('.kickoff-match-time').textContent.trim();
            var kickoffEventTime = parseEventDateTime(kickoffDate, kickoffTime);

            var eventDurationHours = parseFloat(container.getAttribute('data-duration')) || 3.5;
            var eventDurationMilliseconds = eventDurationHours * 60 * 60 * 1000;

            // Update match times for both eventTime and kickoffEventTime
            updateMatchTimes(container, eventTime); // Original event time
            updateMatchTimes(container, kickoffEventTime); // Kickoff time adjustment

            // Check live status using eventTime
            checkLiveStatus(container, eventTime, eventDurationMilliseconds);

            // Check stored event status
            var storedStatus = sessionStorage.getItem(`eventStatus_${id}`);
            if (storedStatus === 'ended') {
                markEventAsEnded(id); // Set event as ended if stored status is "ended"
                if (activeEventId === id) {
                    redirectToEndedURL();
                }
            }

            // Setup server buttons
            var servers = JSON.parse(container.getAttribute('data-servers'));
            var buttonsContainer = container.querySelector('.buttons-container');

            buttonsContainer.innerHTML = ''; // Clear existing buttons

            servers.forEach(function(server, index) {
                if (server.label.includes("Mobile") && !isMobileDevice()) {
                    return;
                }

                var button = document.createElement('div');
                button.className = 'server-button';
                button.textContent = server.label;
                button.setAttribute('data-url', server.url);
                button.addEventListener('click', function(event) {
                    event.stopPropagation();
                    selectServerButton(button);
                    loadEventVideo(container, server.url);
                });
                buttonsContainer.appendChild(button);

                if (index === 0) {
                    button.classList.add('active');
                }
            });

            // Add event listener to toggle server buttons on click
            container.addEventListener('click', function() {
                var now = new Date();
                if (now >= eventTime) {
                    toggleServerButtons(container, true);
                }
                loadEventVideo(container); // Ensure the event is loaded when container is clicked
            });

            // Restore active button state from sessionStorage
            var storedActiveEventId = sessionStorage.getItem('activeEventId');
            var storedActiveServerUrl = sessionStorage.getItem(`activeServerUrl_${id}`);
            if (storedActiveEventId === id && storedActiveServerUrl) {
                var storedButton = container.querySelector(`.server-button[data-url="${storedActiveServerUrl}"]`);
                if (storedButton) {
                    selectServerButton(storedButton);
                    loadEventVideo(container, storedActiveServerUrl, false);
                }
            }
        });

        // Check if the active event is still valid, otherwise reset it
        if (activeEventId && !validEventIds.includes(activeEventId)) {
            redirectToEndedURL();
        }

        // Start periodic check for event statuses
        startPeriodicEventCheck();
    }

    function parseEventDateTime(date, time) {
        // Assuming date format is "June 21, 2024" and time is "07:30"
        var formattedDate = new Date(`${date}T${time}:00+07:00`);
        return formattedDate;
    }

    function updateCountdown(countdownElement, countdownTimer, eventTime, url, id) {
        clearInterval(intervals[id]); // Clear previous interval if exists

        var interval = setInterval(function() {
            var now = new Date().getTime();
            var distance = eventTime.getTime() - now;

            if (distance < 1000) { // Clear the video src just before the countdown ends
                var videoIframe = document.getElementById('video-iframe');
                if (videoIframe) {
                    videoIframe.src = '';
                }
            }

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.style.display = 'none';
                console.log('Event started:', id);
                loadEventVideo(document.querySelector(`.event-container[data-id="${id}"]`), url, false); // Load video with the initial URL
                checkLiveStatus(document.querySelector(`.event-container[data-id="${id}"]`), eventTime); // Show live label

                // Mark the first button as active
                var firstButton = document.querySelector(`.event-container[data-id="${id}"] .server-button`);
                if (firstButton) {
                    selectServerButton(firstButton);
                }

                // Set timeout to check if event should end after its duration
                var eventDurationMilliseconds = parseFloat(document.querySelector(`.event-container[data-id="${id}"]`).getAttribute('data-duration')) * 60 * 60 * 1000 || 3.5 * 60 * 60 * 1000;
                var eventEndTime = new Date(eventTime.getTime() + eventDurationMilliseconds);
                setTimeout(function() {
                    var now = new Date();
                    if (now >= eventEndTime) {
                        if (activeEventId === id) {
                            markEventAsEnded(id);
                            redirectToEndedURL();
                        }
                    }
                }, eventDurationMilliseconds);
            } else {
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.style.display = 'block'; // Ensure countdown element is displayed
                countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
                console.log(`Countdown for event ${id}: ${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        intervals[id] = interval; // Store the interval in the intervals object
    }

    function updateMatchTimes(container, eventStartTime) {
        var matchDateElem = container.querySelector('.match-date');
        var matchTimeElem = container.querySelector('.match-time');
        var kickoffDateElem = container.querySelector('.kickoff-match-date');
        var kickoffTimeElem = container.querySelector('.kickoff-match-time');

        if (!matchDateElem.hasAttribute('data-original-date')) {
            matchDateElem.setAttribute('data-original-date', matchDateElem.textContent.trim());
            matchTimeElem.setAttribute('data-original-time', matchTimeElem.textContent.trim());
        }

        var utcDate = new Date(eventStartTime.getTime() + (eventStartTime.getTimezoneOffset() * 60000));
        var visitorOffsetInMinutes = new Date().getTimezoneOffset();
        var visitorOffsetInHours = visitorOffsetInMinutes / 60;
        var localEventStartTime = new Date(utcDate.getTime() - (visitorOffsetInHours * 60 * 60 * 1000));

        var adjustedDate = localEventStartTime.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        var adjustedTime = localEventStartTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        console.log(`Adjusted date for event: ${adjustedDate}`);
        console.log(`Adjusted time for event: ${adjustedTime}`);

        // Update match date and time
        matchDateElem.textContent = adjustedDate;
        matchTimeElem.textContent = adjustedTime;

        // Update kickoff date and time if available
        if (kickoffDateElem && kickoffTimeElem) {
            kickoffDateElem.textContent = adjustedDate;
            kickoffTimeElem.textContent = adjustedTime;
        }
    }

    function checkLiveStatus(container, eventStartTime, eventDurationMilliseconds) {
        var now = new Date();
        var liveLabel = container.querySelector('.live-label');

        if (now >= eventStartTime) {
            liveLabel.style.display = 'block';
            console.log('Event live:', container.getAttribute('data-id'));

            // Set timeout untuk menyembunyikan event container saat event berakhir
            var eventEndTime = new Date(eventStartTime.getTime() + eventDurationMilliseconds);
            setTimeout(function() {
                var now = new Date();
                if (now >= eventEndTime) {
                    markEventAsEnded(container.getAttribute('data-id')); // Sembunyikan event-container saat event berakhir
                }
            }, eventEndTime.getTime() - now);
        } else {
            liveLabel.style.display = 'none';
            console.log('Event not live yet:', container.getAttribute('data-id'));

            // Set timeout untuk mengecek status live lagi saat event dimulai
            setTimeout(function() {
                checkLiveStatus(container, eventStartTime, eventDurationMilliseconds);
            }, eventStartTime.getTime() - now);
        }
    }

    function setupChannels() {
        var channelContainers = document.querySelectorAll('.channel-container');
        var activeChannelId = sessionStorage.getItem('activeChannelId');

        channelContainers.forEach(function(container) {
            var channelId = container.getAttribute('data-id');

            if (channelId === activeChannelId) {
                container.classList.add('selected');
                loadEventVideo(container);
            }

            container.addEventListener('click', function() {
                channelContainers.forEach(function(otherContainer) {
                    otherContainer.classList.remove('selected');
                });

                container.classList.add('selected');
                sessionStorage.setItem('activeChannelId', channelId);
                sessionStorage.removeItem('activeEventId'); // Hapus pilihan event agar tidak konflik
                loadEventVideo(container);
            });
        });
    }

    var reconnectTimeout = null;
    var lastLoadedUrl = null;

    function normalizeUrl(url) {
        try {
            let urlObj = new URL(url);
            return urlObj.origin + urlObj.pathname + urlObj.search;
        } catch (e) {
            console.error("Invalid URL:", url);
            return url;
        }
    }

    function loadEventVideo(container, specificUrl = null, resetActiveId = true) {
        var id = container.getAttribute('data-id');
        var storedUrl = sessionStorage.getItem(`activeServerUrl_${id}`);
        var url = specificUrl || storedUrl || container.getAttribute('data-url') || fallbackURL;
        var isChannel = container.classList.contains('channel-container');

        var matchDate = container.querySelector('.match-date')?.getAttribute('data-original-date');
        var matchTime = container.querySelector('.match-time')?.getAttribute('data-original-time');
        var eventDurationHours = parseFloat(container.getAttribute('data-duration')) || 3.5;
        var eventDurationMilliseconds = eventDurationHours * 60 * 60 * 1000;

        var eventStartTime = parseEventDateTime(matchDate, matchTime);
        var now = new Date();

        if (isNaN(eventStartTime.getTime()) && !isChannel) {
            console.error(`Invalid event time for event ${id}: ${matchDate} ${matchTime}`);
            return;
        }

        if (resetActiveId) {
            if (isChannel) {
                sessionStorage.setItem('activeChannelId', id);
                sessionStorage.removeItem('activeEventId');
            } else {
                sessionStorage.setItem('activeEventId', id);
                sessionStorage.removeItem('activeChannelId');
                activeEventId = id;
            }
        }

        var countdownElement = document.getElementById('countdown');
        var countdownTimer = countdownElement.querySelector('.countdown-timer');
        var videoIframe = document.getElementById('video-iframe');
        var videoPlaceholder = document.getElementById('video-placeholder');
        var playerElement = document.getElementById("player");

        if (url.includes('sportsonline') || url.includes('sportcastelite') || url.includes('venoms') || url.includes('p2plive2')) {
            videoIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-top-navigation');
        } else {
            videoIframe.removeAttribute('sandbox');
        }

        document.querySelectorAll('.countdown-wrapper').forEach(function(countdown) {
            countdown.style.display = 'none';
        });
        for (var key in intervals) {
            clearInterval(intervals[key]);
        }

        document.querySelectorAll('.event-container .server-buttons').forEach(function(buttonsContainer) {
            buttonsContainer.style.display = 'none';
        });

        // Tampilkan langsung jika channel (iframe penuh)
        if (isChannel) {
            if (videoIframe.src !== url) {
                videoIframe.src = url;
            }
            videoIframe.style.display = 'block';
            videoPlaceholder.style.display = 'none';
            playerElement.style.display = 'none';
            console.log('Channel video loaded:', url);
            return;
        }

        // Event container logic
        if (now >= eventStartTime) {
            countdownElement.style.display = 'none';

            if (videoIframe && videoIframe.src !== url) {
                videoIframe.src = '';
                videoIframe.style.display = 'none';
            }

            if (videoIframe.src !== url) {
                videoIframe.src = url;
            }

            videoIframe.style.display = 'block';
            videoPlaceholder.style.display = 'none';
            playerElement.style.display = 'none';

            setActiveHoverEffect(id);
            console.log('Loading event video now:', id);
            toggleServerButtons(container, true);
            checkLiveStatus(container, eventStartTime, eventDurationMilliseconds);

            var activeButton = container.querySelector(`.server-button[data-url="${url}"]`);
            if (activeButton) {
                selectServerButton(activeButton);
            }
        } else {
            countdownElement.style.display = 'block';
            videoIframe.style.display = 'none';
            videoPlaceholder.style.display = 'block';
            playerElement.style.display = 'none';
            updateCountdown(countdownElement, countdownTimer, eventStartTime, url, id);
            setActiveHoverEffect(id);
            console.log('Setting countdown for future event:', id);
        }

        toggleServerButtons(container, now >= eventStartTime);

        if (resetActiveId && specificUrl) {
            sessionStorage.setItem(`activeServerUrl_${id}`, specificUrl);
        }
    }

    function markEventAsEnded(eventId) {
        var eventContainer = document.querySelector(`.event-container[data-id="${eventId}"]`);
        if (eventContainer) {
            sessionStorage.setItem(`eventStatus_${eventId}`, 'ended'); // Simpan status "Ended" di sessionStorage
            eventContainer.style.display = 'none'; // Sembunyikan event container ketika event berakhir
        }
    }

    function redirectToEndedURL() {
        var storedActiveEventId = sessionStorage.getItem('activeEventId');
        var storedStatus = sessionStorage.getItem(`eventStatus_${storedActiveEventId}`);

        if (storedStatus === 'ended') {
            // Jika event sudah berakhir, sembunyikan event-container aktif
            var activeEventContainer = document.querySelector(`.event-container[data-id="${storedActiveEventId}"]`);
            if (activeEventContainer) {
                activeEventContainer.style.display = 'none'; // Sembunyikan event container
            }
        }
    }

    function setActiveHoverEffect(activeId) {
        // Menghapus class hover-effect dari semua containers
        document.querySelectorAll('.event-container').forEach(function(container) {
            container.classList.remove('hover-effect');
        });

        // Menambahkan class hover-effect hanya pada container dengan id yang aktif
        var activeContainer = document.querySelector('.event-container[data-id="' + activeId + '"]');
        if (activeContainer) {
            activeContainer.classList.add('hover-effect');
            console.log('Hover effect set for event:', activeId);
        }
    }

    function resetHoverEffect() {
        if (activeEventId) {
            var activeContainer = document.querySelector('.event-container[data-id="' + activeEventId + '"]');
            if (activeContainer) {
                activeContainer.classList.add('hover-effect');
                console.log('Hover effect reset for active event:', activeEventId);
            }
        }
    }

    function toggleServerButtons(container, show = true) {
        var serverButtonsContainer = container.querySelector('.server-buttons');
        if (show) {
            serverButtonsContainer.style.display = 'flex';
        } else {
            serverButtonsContainer.style.display = 'none';
        }
    }

    function selectServerButton(button) {
        // Menghapus class active dari semua tombol server
        var buttons = document.querySelectorAll('.server-button');
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        // Menambahkan class active pada tombol yang diklik
        button.classList.add('active');
        // Simpan URL dari tombol server yang aktif
        var url = button.getAttribute('data-url');
        var eventId = button.closest('.event-container').getAttribute('data-id');
        sessionStorage.setItem(`activeServerUrl_${eventId}`, url);
    }

    // Fungsi untuk switch content
    function switchContent(target) {
        document.querySelectorAll('.sidebar-content').forEach(function(content) {
            content.classList.remove('active'); // hide all content
        });
        var targetContent = document.getElementById(target);
        targetContent.classList.add('active'); // show target content

        // Lazy load chat iframe
        if (target === 'chat') {
            var chatIframe = targetContent.querySelector('.chat-iframe');
            if (chatIframe && !chatIframe.src) {
                chatIframe.src = chatIframe.getAttribute('data-src');
            }
        }
    }

    function refreshVideoPlayer() {
        var videoIframe = document.getElementById('video-iframe');
        if (videoIframe) {
            var currentSrc = videoIframe.src;

            // Cek apakah iframe tersebut menggunakan Clappr dengan pengecekan sumber video HLS
            if (currentSrc.includes('m3u8') || currentSrc.includes('clappr')) {
                try {
                    // Akses player Clappr di dalam iframe
                    var player = videoIframe.contentWindow.player;

                    if (player) {
                        // Reload Clappr player tanpa mengosongkan src iframe
                        player.stop();
                        player.load({
                            source: player.options.source
                        }); // Memuat ulang stream yang sama
                        player.play(); // Mulai ulang player
                        console.log('Clappr player refreshed successfully');
                    }
                } catch (error) {
                    console.error('Failed to refresh Clappr player:', error);
                }
            } else {
                // Logika untuk iframe selain Clappr (tetap seperti sebelumnya)
                videoIframe.src = ''; // Kosongkan src
                // Set atribut sandbox jika perlu
                if (currentSrc.includes('sportsonline') || currentSrc.includes('sportcastelite') || currentSrc.includes('venoms') || currentSrc.includes('p2plive2')) {
                    videoIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-top-navigation');
                } else {
                    videoIframe.removeAttribute('sandbox');
                }
                videoIframe.src = currentSrc; // Set ulang src untuk reload iframe
                console.log('Non-Clappr iframe refreshed successfully');
            }
        }
    }

    function startPeriodicEventCheck() {
        setInterval(function() {
            var now = new Date();
            document.querySelectorAll('.event-container').forEach(function(container) {
                var matchDate = container.querySelector('.match-date').getAttribute('data-original-date');
                var matchTime = container.querySelector('.match-time').getAttribute('data-original-time');
                var eventDurationHours = parseFloat(container.getAttribute('data-duration')) || 3.5;
                var eventDurationMilliseconds = eventDurationHours * 60 * 60 * 1000;

                var eventStartTime = parseEventDateTime(matchDate, matchTime);
                var eventEndTime = new Date(eventStartTime.getTime() + eventDurationMilliseconds);

                if (now >= eventEndTime) {
                    var id = container.getAttribute('data-id');
                    markEventAsEnded(id); // Sembunyikan event-container jika event berakhir
                }
            });
        }, 60000); // Periksa setiap menit
    }

window.addEventListener('DOMContentLoaded', async () => {
    await loadEventsFromJSON();       // 🔁 Panggil sekali saat halaman pertama dibuka
    await loadChannelsFromJSON();     // 🔁 Panggil sekali

    setInterval(loadEventsFromJSON, 5000); // 🔁 Refresh setiap 5 detik

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
            return; // ⬅️ Jika event ditemukan, tidak lanjut ke channel
        }
    }

    // 🔄 Restore session untuk channel (jika event tidak tersedia)
    const storedActiveChannelId = sessionStorage.getItem('activeChannelId');
    if (storedActiveChannelId) {
        const activeChannel = document.querySelector(`.channel-container[data-id="${storedActiveChannelId}"]`);
        if (activeChannel) {
            activeChannel.classList.add('selected');
            loadEventVideo(activeChannel);
        }
    }
});
