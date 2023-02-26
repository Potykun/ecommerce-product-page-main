const iconEl = document.querySelector(".icon-moon");

iconEl.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconEl.src = "./asset/sun.png";
  } else {
    iconEl.src = "./asset/moon.png";
  }
});
