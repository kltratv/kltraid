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

  window.__EVENT_DATA__ =
[
  {
    "id": "4a3c357c-3b9e-4168-b217-2305faa9ab07",
    "duration": 1000,
    "league": "NBA",
    "icon": "https://kltraid.pages.dev/images/sportsicon/Basket.png",
    "team1": {
      "name": "Pacers",
      "logo": "https://cdn.sportnanoapi.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png"
    },
    "team2": {
      "name": "Knicks",
      "logo": "https://ssl.gstatic.com/onebox/media/sports/logos/-rf7eY39l_0V7J4ekakuKA_96x96.png"
    },
    "kickoff_date": "2025-05-26",
    "kickoff_time": "07:00",
    "match_date": "2025-05-26",
    "match_time": "07:00",
    "firstRow": 14
  }
]
})();