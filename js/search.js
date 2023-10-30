const movieCards = document.querySelector(".movie-cards");
const searchValue = document.getElementById("search-value");
const searchBtn = document.querySelector(".search-btn");
const no = document.querySelector(".no-movie");

export function searchMovie() {
  const movieCard = movieCards.querySelectorAll(".movie-card");

  function handleSearch(e) {
    e.preventDefault();
    const searchMovieList = [];
    let searchedValue = searchValue.value.toLowerCase();

    movieCard.forEach((card) => {
      const title = card
        .querySelector(".movie-card-title")
        .textContent.toLowerCase();

      if (title.includes(searchedValue)) {
        card.style.display = "block";
        searchMovieList.push(title);
      } else {
        card.style.display = "none";
      }
    });
    if (searchMovieList.length == 0) {
      no.innerHTML = "No movie data.";
      alert("검색 결과가 없습니다.");
    }
  }
  searchBtn.addEventListener("click", handleSearch);
}
