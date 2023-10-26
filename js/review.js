const reviewForm = document.querySelector(".review__form");
const reviewUsername = document.querySelector(".review__username");
const reviewPassword = document.querySelector(".review__password");
const reviewStar = document.querySelector(".review__star");
const reviewTextarea = document.querySelector(".review__textarea");
const reviewSubmitBtn = document.querySelector(".review__submitbtn");
const reviewLists = document.getElementById("review__lists");
let reviews = [];
// let id = storage.length;

function submitReview(e) {
  e.preventDefault();
  console.log(reviewUsername.value);
  console.log(reviewPassword.value);
  console.log(reviewStar.value);
  console.log(reviewTextarea.value);

  const reviewObj = {
    name: reviewUsername.value,
    password: reviewPassword.value,
    star: reviewStar.value,
    review: reviewTextarea.value,
    id: Date.now(),
  };

  reviews.push(reviewObj);
  localStorage.setItem("review", JSON.stringify(storage));
  reviewForm.reset();

  paintReview(reviewObj);
}

reviewForm.addEventListener("submit", submitReview);
//reviewSubmitBtn.addEventListener("click", handleReviewForm);

function paintReview(reviewObj) {
  const li = document.createElement("li");
  li.id = reviewObj.id;
  li.innerHTML = ``;
}
