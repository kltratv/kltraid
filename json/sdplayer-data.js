(function() {
  const allowedOrigins = [
    "https://kltraid.pages.dev",
    "https://bikinbaru96.blogspot.com",
    "https://kltraidx01.blogspot.com",
    "https://kltratvad.blogspot.com",
    "https://kltratvqq.blogspot.com"
  ];

  const ref = document.referrer || "";
  const isAllowed = allowedOrigins.some(origin => ref.includes(origin));

  if (!isAllowed && ref !== "") {
    window.location.href = "/404";
    return;
  }

  window.__PLAYER_DATA__ =
[
  {
    "id": "912533f8-c089-4fef-8e00-0d53ace2ba1a",
    "servers": [
      {
        "key": "H003OKFHvF",
        "url": "https://bikinbaru96.blogspot.com/p/playermpd.html?channel=tnt2",
        "label": "HD AUTO"
      },
      {
        "key": "bBvWQtBR2w",
        "url": "",
        "label": ""
      },
      {
        "key": "1w2e7TDKPY",
        "url": "https://livetvkilatlive.applecdnstore.com/livetv/2024/UK_TNT_SPORTS_2/index.m3u8",
        "label": "SD [IOS]"
      }
    ]
  }
]
})();