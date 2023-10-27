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
  const openBtn = document.createElement("button");
  li.id = reviewObj.id;
  li.classList.add("review__list");
  li.innerHTML = `<div>
  <span>${reviewObj.name}</span>
  <span>${reviewObj.star}</span>
</div>
<p>
  ${reviewObj.review}
</p>
`;
  openBtn.innerText = "모달";
  openBtn.classList.add("modal__open-btn");
  openBtn.addEventListener("click", openModal);
  const div1 = document.createElement("div");
  div1.classList.add("hidden");
  div1.classList.add("modal__container");
  const div2 = document.createElement("div");
  div2.classList.add("modal__content");
  const input = document.createElement("input");
  input.setAttribute("type", "password");
  input.setAttribute("placeholder", "비밀번호를 입력하세요");
  input.setAttribute("class", "modal__input");
  // input.setAttribute("required");
  const div3 = document.createElement("div");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("modal__close-btn");
  closeBtn.innerText = "취소";
  closeBtn.addEventListener("click", closeModal);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("modal__delete-btn");
  deleteBtn.innerText = "삭제";
  deleteBtn.addEventListener("click", deleteReview);
  div3.appendChild(closeBtn);
  div3.appendChild(deleteBtn);
  div2.appendChild(input);
  div2.appendChild(div3);
  div1.appendChild(div2);

  li.appendChild(openBtn);
  li.appendChild(div1);
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
  const li =
    event.target.parentElement.parentElement.parentElement.parentElement;
  const targetReview = reviewStorage.find(
    (review) => review.id === parseInt(li.id)
  );
  console.log(targetReview);
  console.log(targetReview.password);

  const modalInput = document.querySelector(".modal__input");
  console.log(modalInput.value);
  if (targetReview.password !== modalInput.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  reviewStorage = reviewStorage.filter(
    (review) => review.id !== parseInt(li.id)
  );
  saveReview();
  li.remove();
}

//    modal
// const modalOpenButton = document.querySelector(".modal__open-btn");
// const modalCloseButton = document.querySelectorAll(".modal__close-btn");
// const modalDeleteBtn = document.querySelector(".modal__delete-btn");
const modal = document.querySelector(".modal__container");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}
