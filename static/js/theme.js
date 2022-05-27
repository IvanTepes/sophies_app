// Select the button
const theme = document.body.classList.contains('my-class-name')
const btn = document.querySelector("#theme-switch");
// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});


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
