import { addMovie } from "./movie.js";
import { sortMovie } from "./sort.js";
import { searchMovie } from "./search.js";

async function fetchPopularContent() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const data = response.json();
  return data;
}

async function generatePopularContent() {
  const results = await fetchPopularContent();
  const result = results.results;
  result.forEach((movie) => {
    addMovie(movie);
  });

  sortMovie(result);
  searchMovie();
  return result;
}

generatePopularContent();
