const reviewForm = document.querySelector(".review__form");
const reviewUsername = document.querySelector(".review__username");
const reviewPassword = document.querySelector(".review__password");
const reviewStar = document.querySelector(".review__star");
const reviewTextarea = document.querySelector(".review__textarea");
const reviewSubmitBtn = document.querySelector(".review__submitbtn");
const reviewLists = document.getElementById("review__lists");

const URLSearch = new URLSearchParams(location.search);
let id = parseInt(URLSearch.get("id"));

let reviewStorage = [];

function saveReview() {
  localStorage.setItem("review", JSON.stringify(reviewStorage));
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

  reviewStorage.push(reviewObj);
  reviewForm.reset();

  paintReview(reviewObj);
  saveReview();
}

reviewForm.addEventListener("submit", submitReview);
//reviewSubmitBtn.addEventListener("click", submitReview);

function paintReview(reviewObj) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  li.id = reviewObj.id;
  li.classList.add("review__list");
  li.innerHTML = `<div>
  <span>${reviewObj.name}</span>
  <span>${reviewObj.star}</span>
</div>
<p>
  ${reviewObj.review}
</p>
            <div class="hidden modal__container">
              <div class="modal__content">
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <div>
                  <button class="modal__close-btn" class="btn">취소</button>
                  <button class="modal__delete-btn" class="btn">삭제</button>
                </div>
              </div>
            </div>
`;
  btn.innerText = "모달";
  btn.classList.add("modal__open-btn");
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
  // btn.addEventListener("click", deleteReview);

  li.appendChild(btn);
  reviewLists.append(li);
}

const saveReviews = localStorage.getItem("review");

if (saveReviews !== null) {
  //만약 Reviews가 localStorage에 존재하면 실행할 코드
  const parsedReviews = JSON.parse(saveReviews);
  reviewStorage = parsedReviews;
  parsedReviews.filter((obj) => obj.movieid == id).forEach(paintReview);
}

function handleTextareaEnter(e) {
  if (e.key == "Enter") {
    reviewSubmitBtn.click();
  }
}

reviewTextarea.addEventListener("keyup", handleTextareaEnter);

function deleteReview(event) {
  const li = event.target.parentElement;
  reviewStorage = reviewStorage.filter(
    (review) => review.id !== parseInt(li.id)
  );
  saveReview();
  li.remove();
}

//    modal
// const modalOpenButton = document.querySelector(".modal__open-btn");
const modalCloseButton = document.querySelectorAll(".modal__close-btn");
const modalDeleteBtn = document.querySelector(".modal__delete-btn");
const modal = document.querySelector(".modal__container");

// modalOpenButton.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// });

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// modalDeleteBtn.forEach((btn) => btn.addEventListener("click", deleteReview));
