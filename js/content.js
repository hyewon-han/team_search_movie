const URLSearch = new URLSearchParams(location.search);
let id = URLSearch.get("id");

async function generateMovieContent() {
  const movie = await fetchMovieContent();
  console.log(movie);
  const base_url = "https://image.tmdb.org/";
  const file_size = "t/p/w500";
  const file_path = movie.poster_path;
  const movieContent = document.querySelector(".movie-content");
  movieContent.innerHTML = `<div class="movie-content__poster">
  <img src=${base_url}${file_size}${file_path} />
</div>`;
}

generateMovieContent();

async function fetchMovieContent() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  const data = await response.json();
  return data;
}

// function handleOnInput(el, maxlength) {
//   if (el.value.length > maxlength) {
//     el.value = el.value.substr(0, maxlength);
//   }
// }
