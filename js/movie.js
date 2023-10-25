const movieCards = document.querySelector(".movie-cards");
const moveTop_btn = document.querySelector(".moveTop");

export function addMovie(movie) {
  const base_url = "https://image.tmdb.org/";
  const file_size = "t/p/w500";
  const file_path = movie.poster_path;
  const div = document.createElement("div");
  div.classList.add("movie-card");

  div.innerHTML = `<div class="movie-card__poster">
  <a href='movie.html?id=${movie.id}'/>
    <img src=${base_url}${file_size}${file_path} /></div>
  <div class="movie-card__content">
    <div class="movie-card__title">${movie.title}</div>
    <div class="movie-card__overview">${movie.overview}</div>
    <div class="movie-card__vote-average">Ratings : ${movie.vote_average}</div>
  </div>`;
  // div.addEventListener("click", () => {
  //   const url = window.location.href + "movie.html?id=" + movie.id;
  //   window.location.href = url;
  // });
  div.id = movie.id;
  movieCards.append(div);
}

function showTopBtn() {
  if (window.scrollY >= 417) moveTop_btn.style.visibility = "visible";
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
