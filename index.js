const body = document.querySelector("body");
const categoriesDiv = document.getElementById("categories-container");

/* Create category div with the default elements */

let n = 0;

function addCategories() {
  const newCategory = document.createElement("div");
  newCategory.id = `category${n + 1}`;
  newCategory.className = "categories";

  const categoryHeader = document.createElement("div");
  categoryHeader.className = "category-header";
  newCategory.appendChild(categoryHeader);

  const listDiv = document.createElement("div");
  listDiv.className = "list-div";
  listDiv.id = `list${n + 1}`;
  newCategory.appendChild(listDiv);

  categoryTitle(categoryHeader);

  categoriesDiv.appendChild(newCategory);

  categoriesDiv.childNodes.forEach((category) =>
    category.addEventListener("click", toggleCategoryList)
  );
  popUpDiv.style.display = "none";
}

/* Show five pre-customized categories on window load */

window.addEventListener("load", addDefaultCategories);

function addDefaultCategories() {
  while (n < 5) {
    addCategories();
    n++;
  }
}

/* Toggle category divs open and close */

function toggleCategoryList() {
  let listElement = this.childNodes[1];
  // listElement.classList.toggle("active");
  listElement.classList.add("active");

  let arrowElement = this.childNodes[0].getElementsByTagName("p")[0];
  arrowElement.classList.toggle("rotate");
}

/* Function to render category title inputs to DOM */

function categoryTitle(parentNode) {
  const title = document.createElement("h3");
  title.className = "category-title";
  title.innerText = document.getElementById("name-category-input")
    ? document.getElementById("name-category-input").value || "Category"
    : "Category";

  const arrowSymbol = document.createElement("p");
  arrowSymbol.className = "arrow";
  arrowSymbol.innerText = "►";

  let categoryHeaderContent = parentNode.append(title, arrowSymbol);
  return categoryHeaderContent;
}

/* Pop up window to get input value for category titles */

const popUpDiv = document.createElement("div");
popUpDiv.className = "pop-up-div";
popUpDiv.style.display = "none";

const label = document.createElement("label");
label.for = "name-category-input";
label.innerText = "Name your category:";

const input = document.createElement("input");
input.type = "text";
input.id = "name-category-input";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";
submitBtn.addEventListener("click", addCategories);

popUpDiv.append(label, input, submitBtn);
body.appendChild(popUpDiv);

const addCategoryBtn = document.getElementById("add-category-btn");
addCategoryBtn.addEventListener("click", nameCategoryPopUp);

function nameCategoryPopUp() {
  popUpDiv.style.display = "flex";
}

//to-do-list functions

function renderToDoListBtn() {
  const list = document.querySelectorAll(".list-div");
  for (let i = 0; i < list.length; i++) {
    // list[i].innerHTML = "";
    console.log(list[i]);
    list[i].innerHTML = `
    <form class="form-${1 + i}">
    <label for="text-input-${1 + i}">add task</label>
    <input class="text-input-${1 + i}" id="text-input-${1 + i}" type="text">
    <button class="btn" value='${1 + i}' id="btn${i}">add toDO TASK</button>
    </form>
    <div class="todo-list-${1 + i}"></div>

    `;
  }
}

setTimeout(() => {
  renderToDoListBtn();
}, 10);

window.addEventListener("click", (e) => {
  const target = e.target;

  const targetClass = target.classList.value;
  if (targetClass === "btn") {
    let idValue = target.value;
    const form = document.querySelector(`.form-${idValue}`);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let input = document.querySelector(`.text-input-${idValue}`);
      let inputValue = input.value;
      const todoList = document.querySelector(`.todo-list-${idValue}`);
      const todo = document.createElement("div");
      todo.textContent = inputValue;
      todo.classList.add = "todoItem";
      todoList.appendChild(todo);
      inputValue = " ";
    });
  }
});
