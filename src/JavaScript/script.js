const mode = document.querySelector(".mode");

function changeMode() {
  const body = document.body;
  const icon = document.getElementById("modes");
  const span = document.getElementById("button-span");
  const button = document.querySelector(".mode");

  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  body.classList.toggle("light");
  body.classList.toggle("dark");

  if (icon.classList.contains("fa-sun")) {
    span.innerText = "Light";
  } else {
    span.innerText = "Dark"; // Altera a cor do botão
  }
}
