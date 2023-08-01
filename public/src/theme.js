const themes = [
  {
    theme: "forest",
    color: "#79da40",
    font: "'Belleza', sans-serif",
  },
  {
    theme: "ocean",
    color: "#31819b",
    font: "'Heebo', sans-serif",
  },
  {
    theme: "sunny",
    color: "#e5cb4c",
    font: "'Rock Salt', cursive",
  },
];

let currentId = 0;
let currentTheme = themes[currentId];
const backgroundWallpaper = document.getElementById("galleryPage");

function toggleThemes() {
  currentId++;
  currentId = currentId % themes.length;
  backgroundWallpaper.style.backgroundColor = themes[currentId].color;
  document.getElementById("visualVoyage").style.fontFamily =
    themes[currentId].font;
}

function changeTheme(id) {
  backgroundWallpaper.style.backgroundColor = themes[id].color;
  backgroundWallpaper.style.fontFamily = themes[id].font;
  document.getElementById("visualVoyage").style.fontFamily = themes[id].font;
}

function getTheme() {
  return themes[currentId].theme;
}
