const reviewForm = document.querySelector(".review__form");
const reviewUsername = document.querySelector(".review__username");
const reviewPassword = document.querySelector(".review__password");
const reviewStar = document.querySelector(".review__star");
const reviewTextarea = document.querySelector(".review__textarea");
const reviewSubmitBtn = document.querySelector(".review__submitbtn");
const reviewLists = document.getElementById("review__lists");
const reviewBox = document.querySelector(".review__box");
let reviewCount = document.getElementById("review__count");
const URLSearch = new URLSearchParams(location.search);
let id = parseInt(URLSearch.get("id"));
let cnt = 0;
let reviewStorage = [];

function saveReview() {
  localStorage.setItem("review", JSON.stringify(reviewStorage));
  console.log(reviewStorage.length);
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
  saveReview();
  paintReview(reviewObj);
}

reviewForm.addEventListener("submit", submitReview);

const modals = document.querySelectorAll(".modal__container");
let modalsArray = Array.from(modals);

function paintReview(reviewObj) {
  cnt++;
  reviewCount.innerText = `+ ${cnt}`;
  if (cnt !== 0) {
    reviewBox.style.display = "flex";
  }
  const li = document.createElement("li");
  const openBtn = document.createElement("button");
  li.id = reviewObj.id;
  li.classList.add("review__list");
  li.innerHTML = `<div>
  <span>${reviewObj.name}</span>
  <span>${reviewObj.star}</span>
  </div>
  <p>${reviewObj.review}</p>`;
  openBtn.innerText = "❌";
  openBtn.classList.add("modal__open-btn");
  openBtn.addEventListener("click", (e) => {
    const modal = modalsArray.find(
      (modal) => modal.parentElement.id === e.target.parentElement.id
    );
    modal.classList.remove("hidden");
  });
  const div1 = document.createElement("div");
  div1.classList.add("hidden");
  div1.classList.add("modal__container");
  div1.addEventListener("click", (e) => {
    const modal = modalsArray.find(
      (modal) => modal.parentElement.id === e.target.closest(".review__list").id
    );
    modal.classList.add("hidden");
  });
  const div2 = document.createElement("div");
  div2.classList.add("modal__content");
  div2.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  const input = document.createElement("input");
  input.setAttribute("type", "password");
  input.setAttribute("placeholder", "비밀번호를 입력하세요");
  input.setAttribute("class", "modal__input");
  const div3 = document.createElement("div");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("modal__close-btn");
  closeBtn.innerText = "취소";
  closeBtn.addEventListener("click", (e) => {
    const modal = modalsArray.find(
      (modal) => modal.parentElement.id === e.target.closest(".review__list").id
    );
    modal.classList.add("hidden");
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("modal__delete-btn");
  deleteBtn.innerText = "삭제";
  deleteBtn.addEventListener("click", deleteReview);
  div3.appendChild(closeBtn);
  div3.appendChild(deleteBtn);
  div2.appendChild(input);
  div2.appendChild(div3);
  div1.appendChild(div2);
  modalsArray.push(div1);
  li.appendChild(openBtn);
  li.appendChild(div1);
  reviewLists.append(li);
}

const saveReviews = localStorage.getItem("review");

if (saveReviews !== null) {
  //만약 reviewStorage가 localStorage에 존재하면 실행할 코드
  const parsedReviews = JSON.parse(saveReviews);
  reviewStorage = parsedReviews;
  parsedReviews.filter((obj) => obj.movieid == id).forEach(paintReview); // 배열체이닝
}

function handleTextareaEnter(e) {
  if (e.key == "Enter") {
    reviewSubmitBtn.click();
  }
}

reviewTextarea.addEventListener("keyup", handleTextareaEnter);

function deleteReview(event) {
  const li = event.target.closest(".review__list");
  const targetReview = reviewStorage.find(
    (review) => review.id === parseInt(li.id)
  );
  const modalInputs = document.querySelectorAll(".modal__input");
  const modalInputsArray = Array.from(modalInputs);
  const input = modalInputsArray.find(
    (input) =>
      input.closest(".review__list").id ===
      event.target.closest(".review__list").id
  );
  if (input.value === "") {
    alert("비밀번호를 입력하세요.");
    return;
  } else if (targetReview.password !== input.value) {
    alert("비밀번호가 일치하지 않습니다.");
    input.value = "";
    return;
  }
  reviewStorage = reviewStorage.filter(
    (review) => review.id !== parseInt(li.id)
  );
  saveReview();
  li.remove();
}
