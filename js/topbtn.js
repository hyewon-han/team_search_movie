const moveTop_btn = document.querySelector(".moveTop");

function showTopBtn() {
  if (window.scrollY >= 179) moveTop_btn.style.visibility = "visible";
  else moveTop_btn.style.visibility = "hidden";
}

function moveTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", showTopBtn);
moveTop_btn.addEventListener("click", moveTop);
