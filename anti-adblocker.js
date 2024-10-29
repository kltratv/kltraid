document.addEventListener("DOMContentLoaded", function() {
    const detect = document.createElement("div");
    detect.id = "detect";
    document.body.appendChild(detect);

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.innerHTML = `
      <div class="content">
        <div class="warn-icon">
          <span class="icon"><i class="fas fa-exclamation"></i></span>
        </div>
        <h2>AdBlock Detected!</h2>
        <p>Our website is made possible by displaying ads to our visitors. Please support us by whitelisting our website.</p>
      </div>
    `;
    document.body.appendChild(wrapper);

    // Tambahkan kelas yang biasa diblok oleh AdBlock
    let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
    for(let item of adClasses) {
      detect.classList.add(item);
    }

    function checkAdBlock() {
        let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
        if (getProperty === "none") {
            wrapper.classList.add("show");
        } else {
            wrapper.classList.remove("show");
        }
    }

    setInterval(checkAdBlock, 2000);
});
