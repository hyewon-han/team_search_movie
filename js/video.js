const URLSearch = new URLSearchParams(location.search);
let id = URLSearch.get("id");
const videoType = document.querySelector(".video__type");
const videoLink = document.getElementById("video__link");
const video = document.querySelector(".video");

async function fetchVideoContent() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );
  const data = await response.json();
  return data;
}

async function generateVideoContent() {
  const video = await fetchVideoContent();
  const key = video.results[0].key;
  const videoUrl = `https://www.youtube.com/watch?v=${key}`;
  videoType.innerText = video.results[0].type;
  videoLink.href = videoUrl;
}

generateVideoContent();
