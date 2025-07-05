const toggleBtn = document.getElementById("themeToggle");
function applyTheme(mode) {
  document.body.className = mode === "light" ? "light" : "";
  toggleBtn.textContent = mode === "light" ? "☀️ Dark Mode" : "🌙 Light Mode";
  localStorage.setItem("theme", mode);
}
toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(newTheme);
});
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);