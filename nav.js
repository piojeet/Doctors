let menuIcon = document.querySelector("header nav .menu-icon");
let closeIcon = document.querySelector("header nav .close-icon");
let navList = document.querySelector("header .nav-list");

menuIcon.addEventListener("click", function() {
  navList.classList.add("active");
  menuIcon.classList.add("active");
  closeIcon.classList.add("active");
  document.body.style.overflow = "hidden";
})

closeIcon.addEventListener("click", function() {
  navList.classList.remove("active");
  menuIcon.classList.remove("active");
  closeIcon.classList.remove("active");
  document.body.style.overflow = "auto";
});