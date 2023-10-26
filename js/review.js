const reviewForm = document.querySelector(".review__form");
const reviewUsername = document.querySelector(".review__username");
const reviewPassword = document.querySelector(".review__password");
const reviewStar = document.querySelector(".review__star");
const reviewTextarea = document.querySelector(".review__textarea");
const reviewSubmitBtn = document.querySelector(".review__submitbtn");
const reviewLists = document.getElementById("review__lists");
const URLSearch = new URLSearchParams(location.search);
let id = parseInt(URLSearch.get("id"));

let reviews = [];

function saveReview() {
  localStorage.setItem("review", JSON.stringify(reviews));
}

function submitReview(e) {
  e.preventDefault();

  const reviewObj = {
    name: reviewUsername.value,
    password: reviewPassword.value,
    star: reviewStar.value,
    review: reviewTextarea.value,
    id: Date.now(),
    movieid: parseInt(id),
  };

  reviews.push(reviewObj);
  reviewForm.reset();

  paintReview(reviewObj);
  saveReview();
}

reviewForm.addEventListener("submit", submitReview);
//reviewSubmitBtn.addEventListener("click", handleReviewForm);

function paintReview(reviewObj) {
  const li = document.createElement("li");
  li.id = reviewObj.id;
  li.classList.add("review__list");
  li.innerHTML = `<div>
  <span>${reviewObj.name}</span>
  <span>${reviewObj.star}</span>
</div>
<p>
  ${reviewObj.review}
</p>
<div>
  <button>삭제</button>
</div>`;
  reviewLists.append(li);
}

const saveReviews = localStorage.getItem("review");

if (saveReviews !== null) {
  //만약 Reviews가 localStorage에 존재하면 실행할 코드
  const parsedReviews = JSON.parse(saveReviews);
  reviews = parsedReviews;
  console.log(parsedReviews);
  parsedReviews.filter((obj) => obj.movieid == id).forEach(paintReview);
}
