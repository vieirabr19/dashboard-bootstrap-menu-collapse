const sidebarToggle = document.querySelector("#sidebar_toggle");
sidebarToggle.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});
