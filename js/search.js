const movieCards = document.querySelector(".movie-cards");

export function searchMovie() {
  const movieCard = movieCards.querySelectorAll(".movie-card");
  const searchValue = document.getElementById("search__value");
  const searchBtn = document.querySelector(".search__btn");
  const sortBtn = document.querySelector("nameBtn");

  function handleSearch(e) {
    e.preventDefault();
    let value = searchValue.value.toLowerCase();

    movieCard.forEach((element) => {
      element.classList.remove("hidden");
      let movieTitle =
        element.childNodes[2].childNodes[1].innerText.toLowerCase();

      if (!movieTitle.includes(value)) {
        element.classList.add("hidden");
      }
    });
  }
  function handleSort() {
    const movieCardArray = Array.from(movieCard);
    movieCardArray.sort((a, b) => {
      const titleA = a.querySelector("nameBtn").innerText.toLowerCase();
      const titleB = b.querySelector("nameBtn").innerText.toLowerCase();
      return titleA.localeCompare(titleB);
    });

    movieCardArray.forEach((element) => {
      movieCards.appendChild(element);
    });
  }

  searchBtn.addEventListener("click", handleSearch);
  sortBtn.addEventListener("click", handleSort);
}
