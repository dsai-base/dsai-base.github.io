

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    clearAllActive();
    panel.classList.toggle("active");
  });
});

function clearAllActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}