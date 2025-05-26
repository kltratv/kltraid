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
        "key": "bK3vyzU03B",
        "url": "",
        "label": ""
      },
      {
        "key": "o3sCEk8Bzx",
        "url": "",
        "label": ""
      },
      {
        "key": "Ig4MkVC1Ge",
        "url": "",
        "label": ""
      }
    ]
  }
]
})();