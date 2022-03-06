const addToCategoryBtn = document.querySelector(".add-category-btn");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const cancelBtn = document.querySelector(".cancel-btn");
const submitBtn = document.querySelector(".submit-btn");
const overlay = document.querySelector(".overlay");
const modalInput = document.querySelector(".input");

function modalToggle() {
  modal.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

function modalCatgoryText() {
  modalTitle.textContent = "create new category";
  submitBtn.textContent = "Add Category";
}

addToCategoryBtn.addEventListener("click", modalToggle);
cancelBtn.addEventListener("click", modalToggle);
addToCategoryBtn.addEventListener("click", modalCatgoryText);

// addToCategoryBtn.addEventListener("click", testModalIfOpen);


function 