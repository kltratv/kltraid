  import sources from './sdplayersources.js';
  import { allowedDomains } from '/js/allowdomain.js';

  jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';

  let playerInstance = null;

  function destroyJWPlayer() {
    if (playerInstance) {
      playerInstance.stop();
      playerInstance.remove();
      playerInstance = null;
      document.getElementById('jwContainer').innerHTML = '<div id="player" class="jw-video-container"></div>';
      console.log('[JW] Player destroyed');
    }
  }

  function showLoader() {
    document.getElementById('loaderContainer').classList.remove('hidden');
    document.getElementById('jwContainer').classList.add('hidden');
    document.getElementById('videoIframe').classList.add('hidden');
  }

  function hideLoader() {
    document.getElementById('loaderContainer').classList.add('hidden');
  }

  function setReferrerPolicy(url) {
    const blocked = ['jiatianxiazhuangshi', 'naqsheala', 'inplaynet', 'newkso', 'op-group1-swiftservehd-1.dens'];
    const link = document.createElement('a');
    link.href = url;
    if (blocked.some(k => link.hostname.includes(k))) {
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'no-referrer';
      document.head.appendChild(meta);
    }
  }

  function loadVideoByUrl(url) {
    destroyJWPlayer();
    document.getElementById('videoIframe').src = 'about:blank';
    setReferrerPolicy(url);

    if (url.includes('.m3u8')) {
      document.getElementById('jwContainer').classList.remove('hidden');
      document.getElementById('videoIframe').classList.add('hidden');

      playerInstance = jwplayer("player").setup({
        playlist: [{
          file: url,
          image: '',
          type: "hls",
          label: "HD"
        }],
        width: "100%",
        aspectratio: "16:9",
        autostart: true,
        mute: true,
        stretching: "uniform",
        playsinline: true,
        logo: { file: '' },
        cast: {},
        sharing: false
      });

      playerInstance.addButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="white" stroke-width="0.8" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 1 0-.908-.418A6 6 0 1 0 8 2v1z"/>
          <path d="M8 0a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0z"/>
        </svg>`,
        "Refresh Video",
        () => {
          const currentFile = playerInstance.getPlaylistItem().file;
          playerInstance.stop().load({ file: currentFile }).play();
        },
        "refresh-button"
      );

      playerInstance.on('error', () => {
        setTimeout(() => {
          playerInstance.stop().load({ file: url }).play();
        }, 5000);
      });

    } else {
      const iframe = document.getElementById('videoIframe');
      document.getElementById('jwContainer').classList.add('hidden');
      iframe.classList.remove('hidden');
      iframe.src = url;

      const excluded = ['embedstreams.top', 'legalhelpfast.pro', 'streamsvv1.su'];
      const hostname = new URL(url).hostname;
      if (excluded.includes(hostname)) {
        iframe.removeAttribute('sandbox');
      }
    }

    hideLoader();
  }

function handlePostMessage(event) {
    if (!allowedDomains.includes(event.origin)) return;

    const { type, key, url } = event.data;

    if (type === 'SET_VIDEO') {
      if (key && sources[key]) {
        showLoader();
        loadVideoByUrl(sources[key]);
      } else {
        console.warn('[JW] Invalid key or missing source:', key);
        showLoader();
        destroyJWPlayer();
        document.getElementById('videoIframe').src = 'about:blank';
      }
    }

    if (type === 'CHANGE_STREAM' && url) {
      showLoader();
      loadVideoByUrl(url);
    }
  }

  window.addEventListener('message', handlePostMessage);

  window.addEventListener('load', () => {
    window.parent.postMessage('JW_READY', '*');
    disableDevtool();
  });

  // Fungsi inilah yang kita modifikasi
  function onFullscreenChange() {
    // Lock orientasi ke landscape jika browser mendukung
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape')
          .then(() => console.log('[JW] Orientation locked to landscape'))
          .catch(err => console.warn('[JW] Orientation lock tidak didukung:', err));
      }
    }

    // Contoh: tetap jalankan logika mute
    if (playerInstance && typeof playerInstance.setMute === 'function') {
      playerInstance.setMute(true);
      console.log('[JW] Mute enforced on fullscreen');
    }
  }

  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
