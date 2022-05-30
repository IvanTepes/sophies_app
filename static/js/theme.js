

// Function to change image src on logo when theme is changed
 function changeLogo() {
  let logo = document.getElementById('js-logo');
  if (logo.src.match("media/logo/logo_big_blue.svg")) {
      logo.src = "media/logo/logo-big-orange.svg";
  }
  else {
      logo.src = "media/logo/logo_big_blue.svg";
  }
}


// Check and set prefered theme and logo
let logo = document.getElementById('js-logo');
let checkbox = document.querySelector("input[name=js-nav-menu__theme-switch--checkbox]");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
  logo.src = "media/logo/logo-big-orange.svg";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  checkbox.checked = false;
  logo.src = "media/logo/logo_big_blue.svg";
}


// switch theme if checkbox is engaged
checkbox.addEventListener("change", (cb) => {
  document.documentElement.setAttribute(
    "data-theme",
    cb.target.checked ? "dark" : "light"
  );
});
