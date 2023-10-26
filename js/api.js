import { searchMovie } from "./search.js";
import { addMovie } from "./movie.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
  },
};

fetch("https://api.themoviedb.org/3/movie/popular?language=ko&page=1", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const result = response.results;
    result.forEach((movie) => {
      addMovie(movie);
    });
  })
  .then(searchMovie)
  .catch((err) => console.error(err));

//다크모드
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
//다크모드
