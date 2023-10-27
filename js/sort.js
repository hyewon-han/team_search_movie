const averageBtn = document.querySelector(".avgBtn");

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
