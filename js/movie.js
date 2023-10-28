const movieCards = document.querySelector(".movie-cards");

export function addMovie(movie) {
  const base_url = "https://image.tmdb.org/";
  const file_size = "t/p/w500";
  const file_path = movie.poster_path;
  const div = document.createElement("div");
  div.classList.add("movie-card");

  div.innerHTML = `<div class="movie-card-poster">
  <a href='movie.html?id=${movie.id}'/>
    <img src=${base_url}${file_size}${file_path} /></div>
  <div class="movie-card-content">
    <div class="movie-card-title">${movie.title}</div>
    <div class="movie-card-overview">${movie.overview}</div>
    <div class="movie-card-vote-average">Ratings : ${movie.vote_average}</div>
  </div>`;
  // div.addEventListener("click", () => {
  //   const url = window.location.href + "movie.html?id=" + movie.id;
  //   window.location.href = url;
  // });
  div.id = movie.id;
  movieCards.append(div);
}
