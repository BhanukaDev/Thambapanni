const forestMap = document.getElementById("forestMap");
const backdrop = document.getElementById("mapbackdrp");
const sitemapTextContainer = document.getElementsByClassName(
  "sitemap-text-container"
);

// forestMap.style.display = "none"; // to hide
// forestMap.style.display = "block"; // to show

let isShowing = false;
function toggleSiteMap() {
  if (isShowing == true) {
    forestMap.style.display = "none";
    backdrop.style.display = "none";
    hideSitemapText();
    isShowing = false;
  } else {
    forestMap.style.display = "block";
    backdrop.style.display = "block";
    showSitemapText();
    isShowing = true;
  }
}

function hideSitemapText() {
  for (let i = 0; i < sitemapTextContainer.length; i++) {
    sitemapTextContainer[i].style.display = "none";
  }
}

function showSitemapText() {
  for (let i = 0; i < sitemapTextContainer.length; i++) {
    sitemapTextContainer[i].style.display = "block";
  }
}
