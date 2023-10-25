const movieCards = document.querySelector(".movie-cards");
const searchValue = document.getElementById("search__value");
const searchBtn = document.querySelector(".search__btn");

export function searchMovie() {
  const movieCard = movieCards.querySelectorAll(".movie-card");

  function handleSearch(e) {
    e.preventDefault();
    let searchedValue = searchValue.value.toLowerCase();

    movieCard.forEach((card) => {
      const title = card
        .querySelector(".movie-card__title")
        .textContent.toLowerCase();

      card.classList.remove("hidden");
      // let movieTitle = card.childNodes[2].childNodes[1].innerText.toLowerCase();
      if (!title.includes(searchedValue)) {
        card.classList.add("hidden");
      }
    });
  }
  searchBtn.addEventListener("click", handleSearch);
}
