
// Function to change image src on logo when theme is changed
function changeLogo() {
  var image = document.getElementById('logo');
  if (image.src.match("media/logo/logo_big_blue.svg")) {
      image.src = "media/logo/logo-big-orange.svg";
  }
  else {
      image.src = "media/logo/logo_big_blue.svg";
  }
}


let checkbox = document.querySelector("input[name=theme_switch]");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
} else {
  document.documentElement.setAttribute("data-theme", "light");
  checkbox.checked = false;
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  var image = document.getElementById('logo');
      image.src = "media/logo/logo-big-orange.svg";
} else {
  image.src = "media/logo/logo_big_blue.svg";
}

// switch theme if checkbox is engaged
checkbox.addEventListener("change", (cb) => {
  document.documentElement.setAttribute(
    "data-theme",
    cb.target.checked ? "dark" : "light"
  );
});
