        function getQueryParameter(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        const videoKey = getQueryParameter('key');
        const videoUrl = sources[videoKey];

        if (!videoKey || !sources[videoKey]) {
            document.getElementById('loaderContainer').classList.remove('hidden');
            throw new Error('Invalid or missing video key');
        }

        // Handle referrer policy
        (function () {
            const noReferrerKeywords = ['jiatianxiazhuangshi', 'naqsheala', 'inplaynet', 'newkso', 'sindikasi.inews', 'op-group1-swiftservehd-1.dens', 'video.detik'];
            const url = new URL(videoUrl);
            
            if (noReferrerKeywords.some(keyword => url.hostname.includes(keyword))) {
                document.head.innerHTML += '<meta name="referrer" content="no-referrer">';
            }
        })();

        // Inisialisasi Player
        if (videoUrl.includes('.m3u8')) {
            document.getElementById('jwContainer').classList.remove('hidden');
            
            const playerInstance = jwplayer("player").setup({
                playlist: [{
                    file: videoUrl,
                    image: 'https://www.streamkaltaraid.online/images/poster1.png',
                    type: "hls",
                    label: "HD"
                }],
                width: "100%",
                aspectratio: "16:9",
                autostart: false,
                mute: false,
                stretching: "uniform",
                playsinline: true,
                logo: { file: '' },
                cast: {},
                sharing: false
            });

            // Custom Refresh Button
            playerInstance.addButton(
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="white" stroke-width="0.8" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 1 0-.908-.418A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 0a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0z"/>
                </svg>`,
                "Refresh Video",
                function () {
                    const currentFile = playerInstance.getPlaylistItem().file;
                    playerInstance.stop().load({ file: currentFile }).play();
                },
                "refresh-button"
            );
          
          	// Error handling
            playerInstance.on('error', () => {
                setTimeout(() => {
                    playerInstance.stop().load({ file: videoUrl }).play();
                }, 5000);
            });

        } else {
            // Handle excluded domains untuk iframe
            const excludedDomains = ['embedstreams.top', 'embedme.top', 'sindikasi.inews.id'];
            const link = document.createElement('a');
            link.href = videoUrl;

            document.getElementById('videoIframe').classList.remove('hidden');
            
            if (excludedDomains.includes(link.hostname)) {
                document.getElementById('videoIframe').removeAttribute('sandbox');
            }
            
            document.getElementById('videoIframe').src = videoUrl;
        }

        // Fullscreen orientation lock
        function onFullscreenChange() {
            if (document.fullscreenElement) {
                screen.orientation?.lock('landscape').catch(console.error);
            } else {
                screen.orientation?.unlock();
            }
        }

        // Event listeners
        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);
        window.addEventListener('load', () => disableDevtool());
