const imagecontainer = document.getElementById("imagescontainer");
const showMoreInfo = document.getElementById("seemore");
const showimage = document.getElementById("zoomImage");
const titleText = document.getElementById("imgtitle");
const descText = document.getElementById("imgdesc");
const shortText = document.getElementById("shortdesc");
const sideBar = document.getElementsByClassName("sidebar")[0];
const bottomBar = document.getElementsByClassName("bottombar")[0];
const bottombarTitle = document.getElementById("maintitle");

function showInfo(element) {
  const title = element.getAttribute("data-title");
  const desc = element.getAttribute("data-description");
  const url = element.getAttribute("data-url");
  showimage.setAttribute("src", url);

  titleText.textContent = title;
  descText.textContent = desc;
  bottombarTitle.textContent = title;

  showMoreInfo.style.display = "flex";
  // setInterval((showMoreInfo.style.opacity = "1"), 2000);

  shortText.textContent = clampString(desc, 50);
}

function closeShowInfo() {
  showMoreInfo.style.display = "none";
  closeSidebar();
}
function showsidebar() {
  sideBar.style.display = "block";
  bottomBar.style.display = "none";
}

function closeSidebar() {
  sideBar.style.display = "none";
  bottomBar.style.display = "flex";
}

function clampString(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "... See more";
  }
}
