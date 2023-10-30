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

// 밑에는 날씨 API 적용이에요
let weatherData = await fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=37.5666791&lon=126.9782914&appid=a5665c117c73b1089bdaec125ec9b1f9"
);
weatherData = await weatherData.json();
let weather1 = weatherData["weather"][0]["main"];
const weather2 = document.getElementById("weather");
weather2.innerHTML = weather1;
let temp1 = weatherData["main"]["temp"];
temp1 = (temp1 - 32) / 1.8;
const temp3 = document.getElementById("temp");
temp3.innerHTML = temp1;
