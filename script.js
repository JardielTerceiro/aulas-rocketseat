function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "Homem de óculos escuro e uma jaqueta preta")
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "Homem de óculos e uma jaqueta preta")
  }

  const p = document.querySelector("#profile p")

  if (html.classList.contains("light")) {
    p.textContent = "@maykbrito  light"
  } else {
    p.textContent = "@maykbrito"
  }
}
 