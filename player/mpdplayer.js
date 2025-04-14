    import channels from './channel.js';
    import { allowedDomains, allowedHosts, fallbackRedirect } from 'https://kltraid.pages.dev/js/allowdomain.js';
    
    function enforceAllowedHost() {
        const currentHost = window.location.hostname;
    
        if (!allowedHosts.includes(currentHost)) {
            console.error('Access denied: Unauthorized host ->', currentHost);
            window.location.href = fallbackRedirect;
        }
    }
    
    enforceAllowedHost(); // panggil sebelum load apapun
    
    //////////////////////////////////////////////////////////////////
    
    let player, ui, controls;
    let isPlayerReady = false;
    const pendingMessages = [];
    
    function validateOrigin(origin) {
        try {
            const originUrl = new URL(origin);
            return allowedDomains.some(allowed => {
                const allowedUrl = new URL(allowed);
                return originUrl.protocol === allowedUrl.protocol &&
                       originUrl.hostname === allowedUrl.hostname &&
                       originUrl.port === allowedUrl.port;
            });
        } catch {
            return false;
        }
    }
    
    async function loadChannel(channelKey) {
        try {
            if (!player || !isPlayerReady) throw new Error('Player belum siap');
            const channel = channels[channelKey];
            if (!channel) throw new Error('Channel tidak ditemukan');
    
            await player.unload();
    
            player.configure({
                drm: { clearKeys: channel.drm },
                streaming: {
                    rebufferingGoal: 1,
                    bufferingGoal: 3,
                    bufferBehind: 5,
                    autoLowLatencyMode: true,
                    lowLatencyMode: true
                },
                manifest: {
                    dash: {
                        ignoreMinBufferTime: true,
                        autoCorrectDrift: true
                    }
                }
            });
    
            await player.load(channel.url);
            console.log('Berhasil pindah channel:', channelKey);
    
        } catch (error) {
            console.error('Gagal ganti channel:', error);
        }
    }
    
    async function initPlayer() {
        try {
            const video = document.getElementById('video');
            if (!video.ui) {
                await shaka.ui.install(video, {
                    controlPanelElements: ['play_pause', 'time_and_duration', 'spacer', 'mute', 'volume', 'fullscreen', 'overflow_menu']
                });
            }
    
            ui = video.ui;
            controls = ui.getControls();
            player = controls.getPlayer();
    
            player.addEventListener('error', onPlayerError);
            controls.addEventListener('error', onUIError);
    
            ui.configure({
                seekBarColors: {
                    base: 'rgba(255, 0, 0, 0.3)',
                    buffered: 'rgba(255, 0, 0, 0.5)',
                    played: 'red',
                    adBreaks: 'yellow'
                }
            });
    
            const menuButton = document.querySelector('.shaka-overflow-menu-button');
            if (menuButton) {
                menuButton.innerHTML = '<i class="fas fa-cog"></i>';
            }
    
            // Autoplay dari ?channel
            const urlParams = new URLSearchParams(location.search);
            const initialChannel = urlParams.get('channel');
            if (initialChannel && initialChannel in channels) {
                await loadChannel(initialChannel);
            }
    
            isPlayerReady = true;
    
            // Kirim sinyal READY ke parent
            window.parent.postMessage('READY', '*');
    
            processPendingMessages();
    
        } catch (error) {
            console.error('Gagal inisialisasi player:', error);
        }
    }
    
    function processPendingMessages() {
        while (pendingMessages.length > 0) {
            const msg = pendingMessages.shift();
            handleMessage(msg);
        }
    }
    
    function handleMessage(event) {
        if (!isPlayerReady) {
            pendingMessages.push(event);
            return;
        }
    
        try {
            const { data } = event;
            if (data.type === 'CHANGE_CHANNEL') {
                loadChannel(data.channel);
            } else if (data.type === 'STOP_CHANNEL') {
                player?.unload();
                console.log('Channel dihentikan');
            }
        } catch (err) {
            console.error('Error handling message:', err);
        }
    }
    
    window.addEventListener('message', (event) => {
        if (!validateOrigin(event.origin)) {
            console.warn('Diblokir: Origin tidak diizinkan', event.origin);
            return;
        }
    
        handleMessage(event);
    });
    
    function onPlayerError(error) {
        console.error('Player Error:', error.code, error);
    }
    
    function onUIError(error) {
        console.error('UI Error:', error.detail);
    }
    
    document.addEventListener('shaka-ui-loaded', () => {
        console.log('Shaka UI Loaded');
        initPlayer().catch(console.error);
    });
    
    document.addEventListener('shaka-ui-load-failed', (error) => {
        console.error('Shaka UI Gagal Load:', error.detail);
    });
    
    function lockOrientation() {
        if (screen.orientation?.lock) {
            screen.orientation.lock('landscape').catch(error => console.warn('Gagal lock orientation:', error));
        }
    }
    
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            lockOrientation();
        }
    });
