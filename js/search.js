const movieCards = document.querySelector(".movie-cards");
const searchValue = document.getElementById("search-value");
const searchBtn = document.querySelector(".search-btn");
const no = document.querySelector(".no-movie");

export function searchMovie() {

  function handleSearch(e) {
    const movieCard = movieCards.querySelectorAll(".movie-card");
    e.preventDefault();
    console.log('서치 작동!')
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
    } else {
      no.innerHTML = ""
    }
  }
  searchBtn.addEventListener("click", handleSearch);
}
