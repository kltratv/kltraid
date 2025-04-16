        function getQueryParameter(param) {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get(param);
        }

        const videoKey = getQueryParameter('key');

        // Cek jika key tidak ada atau tidak valid
        if (!videoKey || !sources[videoKey]) {
            document.getElementById('loaderContainer').classList.remove('hidden');
            document.getElementById('player').classList.add('hidden');
            document.getElementById('videoIframe').classList.add('hidden');
            throw new Error('Invalid or missing video key'); // Hentikan eksekusi
        }

        const videoUrl = sources[videoKey];
      
        // Tambahkan meta referrer jika domain termasuk dalam daftar
        (function () {
            const noReferrerKeywords = ['sindikasi.inews', 'video.detik', 'op-group1-swiftservehd-1.dens'];

            const url = document.createElement('a');
            url.href = videoUrl;

            // Cek apakah salah satu keyword cocok dengan domain
            const isMatch = noReferrerKeywords.some(keyword => url.hostname.includes(keyword));

            if (isMatch) {
                const meta = document.createElement('meta');
                meta.name = 'referrer';
                meta.content = 'no-referrer';
                document.head.appendChild(meta);
            }
        })();

        if (videoUrl.includes('.m3u8')) {
            document.getElementById('player').classList.remove('hidden');
            
            var playerOptions = {
                source: videoUrl,
                height: '100%',
                width: '100%',
                poster: 'https://kltraid.pages.dev/images/poster.png',
                plugins: [LevelSelector],
                mediacontrol: { seekbar: '#014AFF', buttons: '#FFF' },
                playback: { hlsjsConfig: { startPosition: -1 } },
                mimeType: "application/x-mpegURL"
            };

            var player = new Clappr.Player(playerOptions);
            player.attachTo(document.getElementById("player"));

            player.on(Clappr.Events.PLAYER_FULLSCREEN, function() {
                if (screen.orientation?.lock) {
                    screen.orientation.lock('landscape').catch(console.error);
                }
            });

            player.on(Clappr.Events.PLAYER_EXIT_FULLSCREEN, function() {
                if (screen.orientation?.unlock) {
                    screen.orientation.unlock();
                }
            });

            player.on(Clappr.Events.PLAYER_ERROR, function() {
                console.error('Error occurred. Retrying...');
                setTimeout(() => {
                    player.load({ source: videoUrl });
                    player.play();
                }, 5000);
            });

        } else {
            document.getElementById('videoIframe').classList.remove('hidden');
            
            const excludedDomains = ['sindikasi.inews.id'];
            const link = document.createElement('a');
            link.href = videoUrl;

            if (excludedDomains.includes(link.hostname)) {
                document.getElementById('videoIframe').removeAttribute('sandbox');
            }
            
            document.getElementById('videoIframe').src = videoUrl;
        }

        window.addEventListener('load', () => disableDevtool());
