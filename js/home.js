    var intervals = {}; // Object to keep track of intervals
    var activeEventId = null; // Track the currently active event
    const fallbackURL = "https://bikinbaru96.blogspot.com/2024/06/blog-post_13.html"; // URL fallback jika URL tidak ditemukan
  	// Harus di bagian paling atas JS
    let shakaIframeReady = false;
    let pendingShakaChannel = null;

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

		var adjustedDate = localEventStartTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
		var adjustedTime = localEventStartTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

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
        const channelContainers = document.querySelectorAll('.channel-container');
        const activeChannelId = sessionStorage.getItem('activeChannelId');

        channelContainers.forEach(container => {
            const id = container.getAttribute('data-id');
            const dataUrl = container.getAttribute('data-url');

            if (id === activeChannelId) {
                container.classList.add('selected');
                loadEventVideo(container);
            }

            container.addEventListener('click', () => {
                channelContainers.forEach(c => c.classList.remove('selected'));
                container.classList.add('selected');
                sessionStorage.setItem('activeChannelId', id);
                loadEventVideo(container);
            });
        });
    }

    function loadEventVideo(container, specificUrl = null, resetActiveId = true) {
        const id = container.getAttribute('data-id');
        const originalDataUrl = container.getAttribute('data-url') || fallbackURL;
        const storedUrl = sessionStorage.getItem(`activeServerUrl_${id}`);

        // Reset stored URL jika sudah berbeda dari data-url terbaru
        if (storedUrl && storedUrl !== originalDataUrl) {
            sessionStorage.removeItem(`activeServerUrl_${id}`);
        }

        const url = specificUrl || sessionStorage.getItem(`activeServerUrl_${id}`) || originalDataUrl;
        const isChannel = container.classList.contains('channel-container');
        const isShakaChannel = !url.includes('.html');
        const now = new Date();

        const matchDate = container.querySelector('.match-date')?.getAttribute('data-original-date');
        const matchTime = container.querySelector('.match-time')?.getAttribute('data-original-time');
        const eventStartTime = parseEventDateTime(matchDate, matchTime);
        const duration = parseFloat(container.getAttribute('data-duration')) || 3.5;
        const eventDurationMilliseconds = duration * 60 * 60 * 1000;

        const countdown = document.getElementById('countdown');
        const countdownTimer = countdown.querySelector('.countdown-timer');
        const videoIframe = document.getElementById('video-iframe');
        const shakaIframe = document.getElementById('iframe-shaka');
        const placeholder = document.getElementById('video-placeholder');

        if (!isChannel && isNaN(eventStartTime.getTime())) return;

        if (resetActiveId) {
            activeEventId = id;
            sessionStorage.setItem('activeEventId', id);
        }

        // Reset UI
        document.querySelectorAll('.countdown-wrapper').forEach(el => el.style.display = 'none');
        for (const key in intervals) clearInterval(intervals[key]);
        document.querySelectorAll('.event-container .server-buttons').forEach(el => el.style.display = 'none');

        // Sandbox setting
        if (url.includes('sportsonline') || url.includes('venoms') || url.includes('p2plive2')) {
            videoIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-top-navigation');
        } else {
            videoIframe.removeAttribute('sandbox');
        }

        // Logic untuk static channel
        if (isChannel) {
            placeholder.style.display = 'none';
            countdown.style.display = 'none';

            if (isShakaChannel) {
                pendingShakaChannel = url;

                if (!shakaIframe.src.includes('kltraid.pages.dev')) {
                    shakaIframeReady = false;
                    shakaIframe.src = 'https://kltraid.pages.dev/vip/mpdplayer.html';
                } else if (shakaIframeReady) {
                    shakaIframe.contentWindow.postMessage({
                        type: 'CHANGE_CHANNEL',
                        channel: url
                    }, 'https://kltraid.pages.dev/js');
                    pendingShakaChannel = null;
                }

                videoIframe.src = '';
                videoIframe.style.display = 'none';
                shakaIframe.style.display = 'block';
                console.log('Channel loaded (via Shaka):', url);
            } else {
                shakaIframe.contentWindow?.postMessage({ type: 'STOP_CHANNEL' }, 'https://kltraid.pages.dev/js');
                if (videoIframe.src !== url) videoIframe.src = url;
                videoIframe.style.display = 'block';
                shakaIframe.style.display = 'none';
                console.log('Channel loaded (iframe biasa):', url);
            }

            return;
        }

        // Logic untuk event countdown
        if (now >= eventStartTime) {
            countdown.style.display = 'none';
            placeholder.style.display = 'none';

            if (isShakaChannel) {
                pendingShakaChannel = url;

                if (!shakaIframe.src.includes('kltraid.pages.dev')) {
                    shakaIframeReady = false;
                    shakaIframe.src = 'https://kltraid.pages.dev/mpdplayer.html';
                } else if (shakaIframeReady) {
                    shakaIframe.contentWindow.postMessage({
                        type: 'CHANGE_CHANNEL',
                        channel: url
                    }, 'https://kltraid.pages.dev/js');
                    pendingShakaChannel = null;
                }

                videoIframe.src = '';
                videoIframe.style.display = 'none';
                shakaIframe.style.display = 'block';
                console.log('Loaded via Shaka:', url);
            } else {
                shakaIframe.contentWindow?.postMessage({ type: 'STOP_CHANNEL' }, 'https://kltraid.pages.dev/js');
                if (videoIframe.src !== url) videoIframe.src = url;
                videoIframe.style.display = 'block';
                shakaIframe.style.display = 'none';
                console.log('Loaded via iframe biasa:', url);
            }

            toggleServerButtons(container, true);
            setActiveHoverEffect(id);
            checkLiveStatus(container, eventStartTime, eventDurationMilliseconds);

            const activeButton = container.querySelector(`.server-button[data-url="${url}"]`);
            if (activeButton) selectServerButton(activeButton);
        } else {
            // Event belum dimulai
            countdown.style.display = 'block';
            videoIframe.style.display = 'none';
            shakaIframe.style.display = 'none';
            placeholder.style.display = 'block';
            updateCountdown(countdown, countdownTimer, eventStartTime, url, id);
            setActiveHoverEffect(id);
            console.log('Setting countdown:', id);
        }

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
        const videoIframe = document.getElementById('video-iframe');
        const shakaIframe = document.getElementById('iframe-shaka');
        const activeEventId = sessionStorage.getItem('activeEventId');

        if (!activeEventId) return;

        const activeContainer = document.querySelector(`.event-container[data-id="${activeEventId}"], .channel-container[data-id="${activeEventId}"]`);
        if (!activeContainer) return;

        const storedUrl = sessionStorage.getItem(`activeServerUrl_${activeEventId}`);
        const isShakaChannel = storedUrl && !storedUrl.includes('.html');

        if (isShakaChannel) {
            // Untuk Shaka Player: panggil ulang loadEventVideo agar trigger ulang postMessage
            console.log('[Refresh] Reload Shaka Player via loadEventVideo');
            loadEventVideo(activeContainer, storedUrl, false);
        } else {
            // Untuk iframe biasa: reset src untuk refresh embed
            const currentSrc = videoIframe.src;

            videoIframe.src = ''; // kosongkan
            if (currentSrc.includes('sportsonline') || currentSrc.includes('sportcastelite') || currentSrc.includes('venoms') || currentSrc.includes('p2plive2')) {
                videoIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-top-navigation');
            } else {
                videoIframe.removeAttribute('sandbox');
            }

            videoIframe.src = currentSrc; // set ulang untuk reload
            console.log('[Refresh] Reload iframe biasa:', currentSrc);
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

    // Setup initial events based on data directly from HTML
    setupEvents();
    setupChannels();

    // Ensure correct video is loaded when returning from popunder
    window.addEventListener('message', (event) => {
        if (event.origin !== 'https://kltraid.pages.dev') return;

        if (event.data === 'READY') {
            console.log('[Shaka] Player READY diterima dari iframe');
            shakaIframeReady = true;

            if (pendingShakaChannel) {
                const iframe = document.getElementById('iframe-shaka');
                iframe.contentWindow.postMessage({
                    type: 'CHANGE_CHANNEL',
                    channel: pendingShakaChannel
                }, 'https://kltraid.pages.dev/js');
                console.log('[Shaka] Pending channel dikirim ulang:', pendingShakaChannel);
                pendingShakaChannel = null;
            }
        }
    });
