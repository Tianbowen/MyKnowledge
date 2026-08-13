(() => {
  const root = document.documentElement
  const saved = localStorage.getItem("erwin-mood") || "cafe"
  const apply = (mood) => {
    root.setAttribute("data-mood", mood)
    localStorage.setItem("erwin-mood", mood)
    document.querySelectorAll(".erwin-mood-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-mood") === mood ? "true" : "false")
    })
  }
  apply(saved)
  document.querySelectorAll(".erwin-mood-btn").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.getAttribute("data-mood")))
  })
})()
