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
[]
})();