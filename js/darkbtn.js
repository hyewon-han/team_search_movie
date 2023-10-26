const myButton = document.getElementById("darkModeToggle");

const currentText = "🌞 LIGHT";
const alternateText = "🌜️  DARK";

myButton.addEventListener("click", function () {
  if (myButton.textContent === currentText) {
    myButton.textContent = alternateText;
  } else {
    myButton.textContent = currentText;
  }
});
