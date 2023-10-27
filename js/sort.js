const averageBtn = document.querySelector(".avgBtn");
const movieCards = document.querySelector(".movie-cards");
// export function sortMovie () {
//     const sortMovies = document.querySelectorAll('.movie-card__vote-average');

//     function handleSort (e) {
//         e.preventDefault();
//         const sortedMovieList = [];

//         sortMovies.forEach((sortMovies, card) => {
//             const avrg = sortMovies;
//             sortedMovieList.push(sortMovies.innerHTML.substring(10));
//             sortedMovieList.sort((a, b) => b - a);
//         })
//         console.log(sortedMovieList);
//     }
//     averageBtn.addEventListener("click", handleSort);
// }

export function sortMovie(result) {
  let sortedMovieList = result.sort((a, b) => {
    const averageA = a.vote_average;
    const averageB = b.vote_average;
    return averageB - averageA;
  });
  sortedMovieList.forEach(function (a) {
    console.log(a.vote_average);
  });
  console.log(sortedMovieList);
}

averageBtn.addEventListener("click", sortMovie);
