import { addMovie } from "./movie.js";
const movieCards = document.querySelector(".movie-cards");
const voteAverage = document.querySelector(".sort-vote-average");
const releaseDate = document.querySelector(".sort-release-date");
const movieTitle = document.querySelector(".sort-title");

export const sortMovie = function (unsorted) {
  function avg() {
    sortVoteAverage(unsorted);
  }
  voteAverage.addEventListener("click", avg);

  function title() {
    sortTitle(unsorted);
  }
  movieTitle.addEventListener("click", title);

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
    addMovie(movie);
  });
};

//이름순정렬
const sortTitle = function (unsorted) {
  const sortedMovie = unsorted.sort(function (a, b) {
    const target1 = a.title.toUpperCase();
    const target2 = b.title.toUpperCase();
    const title = (target1 > target2) ? 1 : -1;
    return title
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
    const date = (date1 > date2) ? -1 : 1;
    return date
  });
  movieCards.innerHTML = "";
  sortedMovie.forEach((movie) => {
    addMovie(movie);
  });
}
