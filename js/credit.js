const actorImg1 = document.getElementById("actor-img1");
const actorImg2 = document.getElementById("actor-img2");
const actorImg3 = document.getElementById("actor-img3");
const actorName1 = document.getElementById("actor-name1");
const actorName2 = document.getElementById("actor-name2");
const actorName3 = document.getElementById("actor-name3");
const actorCharacter1 = document.getElementById("actor-character1");
const actorCharacter2 = document.getElementById("actor-character2");
const actorCharacter3 = document.getElementById("actor-character3");

const URLSearch = new URLSearchParams(location.search);
let id = URLSearch.get("id");

async function fetchCreditContent() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  const data = await response.json();
  return data;
}

async function generateCreditContent() {
  const credit = await fetchCreditContent();
  const cast = credit.cast;
  actorImg1.src = `https://image.tmdb.org/t/p/w200/${cast[0].profile_path}`;
  actorImg2.src = `https://image.tmdb.org/t/p/w200/${cast[1].profile_path}`;
  actorImg3.src = `https://image.tmdb.org/t/p/w200/${cast[2].profile_path}`;
  actorName1.innerText = cast[0].name;
  actorName2.innerText = cast[1].name;
  actorName3.innerText = cast[2].name;
  actorCharacter1.innerText = cast[0].character;
  actorCharacter2.innerText = cast[1].character;
  actorCharacter3.innerText = cast[2].character;
}

generateCreditContent();
