const myButton = document.getElementById("dark-mode-toggle");

const currentText = "🌞 LIGHT";
const alternateText = "🌜️  DARK";

myButton.addEventListener("click", function () {
  if (myButton.textContent === currentText) {
    myButton.textContent = alternateText;
    myButton.style.backgroundColor = "black";
    myButton.style.color = "white";
  } else {
    myButton.textContent = currentText;
    myButton.style.backgroundColor = "white";
    myButton.style.color = "black";
  }
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
