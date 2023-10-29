const myButton = document.getElementById("dark-mode-toggle");
const tagline = document.querySelector(".movie-tagline")

const currentText = "🌞 LIGHT";
const alternateText = "🌜️  DARK";

myButton.addEventListener("click", function () {
  if (myButton.textContent === currentText) {
    myButton.textContent = alternateText;
    myButton.style.backgroundColor = "black";
    myButton.style.color = "white";
    tagline.style.color = "rgb(0, 0, 0, 0.5)"
  } else {
    myButton.textContent = currentText;
    myButton.style.backgroundColor = "white";
    myButton.style.color = "black";
    tagline.style.color = "#c8c8c8"
  }
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
