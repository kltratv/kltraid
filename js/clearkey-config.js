window.clearKeyMap = {
  'soccerchannel': (function () {
    const keyIdHex = '4035323a7fe64767ab8f3345ed9b93be';
    const keyHex = '67377b8d429603f8bf30c161bda269e5';
    return {
      url: 'https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd',
      drm: {
        [hexToBase64(keyIdHex)]: hexToBase64(keyHex)
      }
    };
  })()
};
