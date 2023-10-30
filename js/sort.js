import { addMovie } from "./movie.js";
import { searchMovie } from "./search.js";
const movieCards = document.querySelector(".movie-cards");
const voteAverage = document.querySelector(".sort-vote-average");
const releaseDate = document.querySelector(".sort-release-date");
const movieTitle = document.querySelector(".sort-title");

export const sortMovie = function (unsorted) {
  function avg() {
    sortVoteAverage(unsorted);
  }
  function title() {
    sortTitle(unsorted);
  }
  function date() {
    sortReleaseDate(unsorted);
  }

  releaseDate.addEventListener("click", date);
};

//평점순 정렬
const sortVoteAverage = (unsorted) => {
  const sortedMovie = unsorted.sort(function (a, b) {
    return b.vote_average - a.vote_average;
  });
  movieCards.innerHTML = "";
  sortedMovie.forEach((movie) => {
    console.log([movie])
    addMovie(movie);
  });
};

//이름순정렬
const sortTitle = function (unsorted) {
  const sortedMovie = unsorted.sort(function (a, b) {
    const target1 = a.title.toUpperCase();
    const target2 = b.title.toUpperCase();
    if (target1 > target2) {
      return 1;
    } else if (target1 < target2) {
      return -1;
    }
  });
  movieCards.innerHTML = "";
  sortedMovie.forEach((movie) => {
    addMovie(movie);
  });
};

//개봉순 정렬
function sortReleaseDate(unsorted) {
  const sortedMovie = unsorted.sort((a, b) => {
    const date1 = a.release_date.replaceAll("-", "");
    const date2 = b.release_date.replaceAll("-", "");
    if (date1 > date2) {
      return -1;
    } else if (date1 < date2) {
      return 1;
    }
  });
  movieCards.innerHTML = "";
  sortedMovie.forEach((movie) => {
    addMovie(movie);
  });
}
