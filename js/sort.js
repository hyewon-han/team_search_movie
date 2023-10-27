


export const sortMovie = function () {
    let unsortmovies = document.querySelectorAll('.movie-card__vote-average')
    unsortmovies = Array.from(unsortmovies)

    console.log(unsortmovies[0].textContent.slice(10, 14))
}

// export const sortMovie = function (movie) {
//     const unsortmovies = []
//     console.log(movie)
//     unsortmovies.push(movie)
//     console.log(unsortmovies)
//     unsortmovies.vote_average.sort()
// }