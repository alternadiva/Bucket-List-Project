const body = document.body;
const categoriesDiv = document.getElementById("categories-container");

/* Function to render category header content to DOM */

function categoryTitleContent(parentNode) {
  // Category icon
  const catIcon = document.createElement("img");
  catIcon.className = "cat-icon";
  catIcon.src = "./assets/star.png";
  catIcon.alt = "default star icon";

  // Category name
  const title = document.createElement("h3");
  title.className = "category-title";
  title.innerText = document.getElementById("name-category-input")
    ? document.getElementById("name-category-input").value || "Category"
    : "Category";

  // Category edit button
  const editCatName = document.createElement("img");
  editCatName.className = "edit-cat";
  editCatName.src = "./assets/edit.png";
  editCatName.alt = "pencil icon";

  // Category name saving button
  const saveCatName = document.createElement("img");
  saveCatName.className = "save-cat";
  saveCatName.src = "./assets/save.png";
  saveCatName.alt = "diskette icon";
  saveCatName.style.display = "none";

  // Category delete button
  const deleteCatSign = document.createElement("img");
  deleteCatSign.className = "delete-cat";
  deleteCatSign.src = "./assets/delete.png";
  saveCatName.alt = "bin icon";

  // Toggle arrow symbol
  const arrowSymbol = document.createElement("p");
  arrowSymbol.className = "arrow";
  arrowSymbol.innerText = "►";

  let categoryHeaderContent = parentNode.append(
    catIcon,
    title,
    editCatName,
    saveCatName,
    deleteCatSign,
    arrowSymbol
  );
  return categoryHeaderContent;
}

/* Create category containers with the default elements */

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
  renderToDoListBtn(listDiv, n);

  newCategory.appendChild(listDiv);

  categoryTitleContent(categoryHeader);

  categoriesDiv.appendChild(newCategory);

  categoryHeaderEvents();

  popUpDiv.style.display = "none";
  return newCategory;
}

/* Event listeners for category header content */

function categoryHeaderEvents() {
  const catIcon = document.getElementsByClassName("cat-icon");
  const editCatBtn = document.getElementsByClassName("edit-cat");
  const deleteCatBtn = document.getElementsByClassName("delete-cat");
  const saveCatBtn = document.getElementsByClassName("save-cat");

  categoriesDiv.childNodes.forEach((category) => {
    category.children[0].children[1].addEventListener(
      "click",
      toggleCategoryList
    );
    category.children[0].lastElementChild.addEventListener(
      "click",
      toggleCategoryList
    );
  });

  Array.from(catIcon).forEach((button) => {
    button.addEventListener("click", selectIcon);
  });

  Array.from(editCatBtn).forEach((button) => {
    button.addEventListener("click", editCategory);
  });

  Array.from(saveCatBtn).forEach((button) => {
    button.addEventListener("click", saveCategory);
  });

  Array.from(deleteCatBtn).forEach((button) => {
    button.addEventListener("click", deleteCategory);
  });
}

/* Show five pre-customized categories on window load */

window.addEventListener("load", addDefaultCategories);

function addDefaultCategories() {
  while (n < 5) {
    addCategories();
    let categoryName = categoriesDiv.children[n].children[0].children[1];
    let categoryIcon = categoriesDiv.children[n].children[0].children[0];
    for (let i = 0; i < categoriesDiv.children.length; i++) {
      categoryName.innerText = categoryObject[n].categoryName;
      categoryIcon.src = categoryObject[n].categoryIcon;
    }
    n++;
  }
}

/* Delete categories */

function deleteCategory() {
  this.parentNode.parentNode.remove();
}

/* Edit category names and save new input */

function editCategory() {
  this.style.display = "none";
  this.nextElementSibling.style.display = "block";
  let catNameEl = this.previousElementSibling;
  catNameEl.setAttribute("contenteditable", true);
  catNameEl.setAttribute("spellcheck", false);
  catNameEl.innerText = "";
  catNameEl.style.background = "white";
  catNameEl.style.caretColor = "black";
  catNameEl.focus();
  catNameEl.removeEventListener("click", toggleCategoryList, false);

  const observer = new MutationObserver((mutation) => {
    catNameEl.textContent = mutation[0].target.data;
    console.log(mutation);
  });
  observer.observe(catNameEl, {
    characterData: true,
    subtree: true,
  });
}

function saveCategory() {
  this.style.display = "none";
  this.previousElementSibling.style.display = "block";
  let catNameEl = this.parentNode.childNodes[1];
  catNameEl.blur();
  catNameEl.style.background = "none";
  catNameEl.setAttribute("contenteditable", false);
  catNameEl.addEventListener("click", toggleCategoryList);
}

/* Toggle category divs to open and close */

function toggleCategoryList() {
  let listElement = this.parentNode.nextElementSibling;
  listElement.classList.toggle("active");

  let arrowElement = this.parentNode.lastElementChild;
  arrowElement.classList.toggle("rotate");
}

/* Select category icon */

function selectIcon() {
  let previousIcon = this;
  let parentNode = previousIcon.parentNode;

  let iconContainer = document.createElement("div");
  iconContainer.className = "icon-div";

  for (let i = 0; i < categoryObject.length; i++) {
    let newIcon = document.createElement("img");
    newIcon.src = categoryObject[i].categoryIcon;
    newIcon.alt = categoryObject[i].iconAlt;
    newIcon.className = "cat-icon";
    newIcon.classList.add("icon-selection");
    iconContainer.appendChild(newIcon);
    newIcon.addEventListener("click", setCatIcon);
  }

  body.appendChild(iconContainer);

  function setCatIcon() {
    parentNode.replaceChild(this, previousIcon);
    this.classList.remove("icon-selection");
    categoryHeaderEvents();
    iconContainer.remove();
  }
}

/* Pop up window to get input value for category titles */

const popUpDiv = document.createElement("div");
popUpDiv.className = "pop-up-div";
popUpDiv.style.display = "none";

const label = document.createElement("label");
label.for = "name-category-input";
label.id = "cat-input-label";
label.innerText = "Name your category:";

const input = document.createElement("input");
input.type = "text";
input.autocomplete = "off";
input.id = "name-category-input";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";
submitBtn.id = "submit-category";
submitBtn.addEventListener("click", addCategories);

popUpDiv.append(label, input, submitBtn);
body.appendChild(popUpDiv);

const addCategoryBtn = document.getElementById("add-category-btn");
addCategoryBtn.addEventListener("click", nameCategoryPopUp);

function nameCategoryPopUp() {
  popUpDiv.style.display = "flex";
}

/* Category Object */

let categoryObject = [
  {
    categoryName: "Travel",
    categoryIcon: "./assets/travel.png",
    iconAlt: "suitcase icon",
  },
  {
    categoryName: "Movies & Series",
    categoryIcon: "./assets/movie.png",
    iconAlt: "movie icon",
  },
  {
    categoryName: "Books",
    categoryIcon: "./assets/book.png",
    iconAlt: "book icon",
  },
  {
    categoryName: "Activities",
    categoryIcon: "./assets/circus.png",
    iconAlt: "circus icon",
  },
  {
    categoryName: "Meals",
    categoryIcon: "./assets/food.png",
    iconAlt: "cutleries icon",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/clock.png",
    iconAlt: "clock icon",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/drink.png",
    iconAlt: "glass icon",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/heart.png",
    iconAlt: "heart icon",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/laugh.png",
    iconAlt: "laughing emoji",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/music.png",
    iconAlt: "musical notes icon",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/smile.png",
    iconAlt: "smiling emoji",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/star.png",
    iconAlt: "star icon",
  },
  {
    categoryName: "",
    categoryIcon: "./assets/thumbs-up.png",
    iconAlt: "thumbs up icon",
  },
];

/* to-do-list */

function renderToDoListBtn(divContainer, i) {
  divContainer.innerHTML = `
  <form class="form-${1 + i} form-class">
  <label for="text-input-${
    1 + i
  }" class="task-input-label">Add new task:</label>
  <input class="text-input-${1 + i} task-input" id="text-input-${
    1 + i
  }" type="text" autocomplete="off">
  <button class="btn" value='${1 + i}' id="btn${1 + i}">add</button>
  </form>
  <div class="todo-list-${1 + i}"></div>
    `;
}

/* todo list dom manipulation */

let x = 0;

window.addEventListener("click", (e) => {
  const target = e.target;

  const targetClass = target.classList.value;

  if (targetClass === "btn") {
    let idValue = target.value;
    const form = document.querySelector(`.form-${idValue}`);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let input = document.querySelector(`.text-input-${idValue}`);

      const todoList = document.querySelector(`.todo-list-${idValue}`);
      const todo = document.createElement("div");
      todo.textContent = input.value;
      todo.className = "todoItem";
      todo.id = `todo-${x}`;
      todoList.appendChild(todo);
      input.value = " ";
      x++;
    });
  }

  if (targetClass === "todoItem") {
    const targetTodo = e.target;
    targetTodo.classList.add("done");
    targetTodo.classList.remove("todoItem");
  }

  if (targetClass === "done") {
    const targetTodo = e.target;
    targetTodo.remove();
  }
});
