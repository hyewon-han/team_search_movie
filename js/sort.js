// export const sortMovie = function () {
//     let unsortmovies = document.querySelectorAll('.movie-card__vote-average')
//     unsortmovies = Array.from(unsortmovies)

//     console.log(unsortmovies[0].textContent.slice(10, 14))

// }

const averageBtn = document.querySelector(".ratingBtn");

export function sortMovie () {
    const sortMovies = document.querySelectorAll('.movie-card__vote-average');

    function handleSort (e) {
        e.preventDefault();
        const sortedMovieList = [];

        sortMovies.forEach((sortMovies, card) => {
            const avrg = sortMovies;
            sortedMovieList.push(sortMovies.innerHTML.substring(10));
            sortedMovieList.sort((a, b) => b - a);
        })

        console.log(sortedMovieList);
    }
    averageBtn.addEventListener("click", handleSort);
}
