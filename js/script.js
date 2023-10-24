const sidebarToggle = document.querySelector("#sidebar_toggle");
sidebarToggle.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toogleLocalStorage();
  toogleRootClass();
});

function toogleRootClass() {
  const current = document.documentElement.getAttribute("data-bs-theme");
  const inverted = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-bs-theme", inverted);
}

function toogleLocalStorage() {
  if (isLightTheme()) {
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "set");
  }
}

function isLightTheme() {
  return localStorage.getItem("light");
}

if (isLightTheme()) {
  toogleRootClass();
}
