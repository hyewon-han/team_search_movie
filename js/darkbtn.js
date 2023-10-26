const myButton = document.getElementById("darkModeToggle");

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
