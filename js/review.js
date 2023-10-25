const reviewForm = document.querySelector(".review__form");
const reviewUsername = document.querySelector(".review__username");
const reviewPassword = document.querySelector(".review__password");
const reviewStar = document.querySelector(".review__star");
const reviewTextarea = document.querySelector(".review__textarea");

function handleReviewForm(e) {
  e.preventDefault();
  console.log(reviewUsername.value);
  console.log(reviewPassword.value);
  console.log(reviewStar.value);
  console.log(reviewTextarea.value);
}

reviewForm.addEventListener("submit", handleReviewForm);
