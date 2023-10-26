const URLSearch = new URLSearchParams(location.search);
let id = URLSearch.get("id");

const poster = document.querySelector(".movie-poster");
const title = document.querySelector(".movie-title");
const tagline = document.querySelector(".movie-tagline");
const inner = document.querySelectorAll("dt");
const inneContent = Array.from(inner);
const overview = document.querySelector(".movie-overview");

async function generateMovieContent() {
  const movie = await fetchMovieContent();
  console.log(movie);
  document.title = `2GV | ${movie.title}`;
  poster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="...">`;

  title.innerText = movie.title;
  tagline.innerText = movie.tagline;
  inneContent[1].innerText = movie.release_date;

  const genres = [];
  movie.genres.forEach((a) => {
    return genres.push(a.name);
  });
  console.log(genres);
  inneContent[3].innerText = genres;

  inneContent[5].innerText = `${movie.runtime} Minutes`;
  inneContent[7].innerText = movie.vote_average;
  inneContent[9].innerText = movie.production_countries[0].name;
  inneContent[11].innerText = movie.spoken_languages[0].english_name;

  overview.innerText = movie.overview;

  // console.log(movie);
  // console.log(movie.popularity);
  // console.log(movie.vote_average);
  // console.log(movie.spoken_languages[0].english_name);
  // console.log(movie.runtime);
  // console.log(movie.production_countries[0].name);
  // console.log(movie.tagline);
  // console.log(movie.release_date);
  // console.log(movie.title);
  // console.log(movie.genres);
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
    `https://api.themoviedb.org/3/movie/${id}?language=ko`,
    options
  );
  const data = await response.json();
  return data;
}
