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
    "id": "912533f8-c089-4fef-8e00-0d53ace2ba1a",
    "duration": 2000,
    "league": "2025 MotoGP British Grand Prix",
    "icon": "https://kltraid.pages.dev/images/sportsicon/Balapan.png",
    "team1": {
      "name": "MotoGP",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Moto_Gp_logo.svg"
    },
    "team2": {
      "name": "MotoGP",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Moto_Gp_logo.svg"
    },
    "kickoff_date": "2025-05-23",
    "kickoff_time": "16:00",
    "match_date": "2025-05-23",
    "match_time": "16:00",
    "firstRow": 4
  },
  {
    "id": "814abc51-85ff-401b-89dc-e815e8d0540b",
    "duration": 2000,
    "league": "Monaco Grand Prix 2025",
    "icon": "https://kltraid.pages.dev/images/sportsicon/Balapan.png",
    "team1": {
      "name": "Formula 1",
      "logo": "https://ssl.gstatic.com/onebox/media/sports/logos/lTM9VlVyyG5jgF4UHAx94g_64x64.png"
    },
    "team2": {
      "name": "Formula 1",
      "logo": "https://ssl.gstatic.com/onebox/media/sports/logos/lTM9VlVyyG5jgF4UHAx94g_64x64.png"
    },
    "kickoff_date": "2025-05-23",
    "kickoff_time": "17:30",
    "match_date": "2025-05-23",
    "match_time": "17:30",
    "firstRow": 5
  }
]
})();