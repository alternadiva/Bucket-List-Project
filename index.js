const body = document.body;
const categoriesDiv = document.getElementById("categories-container");

/* Function to render category title content to DOM */

function categoryTitleContent(parentNode) {
  const title = document.createElement("h3");
  title.className = "category-title";
  title.innerText = document.getElementById("name-category-input")
    ? document.getElementById("name-category-input").value || "Category"
    : "Category";

  const deleteCatSign = document.createElement("p");
  deleteCatSign.className = "delete-cat";
  deleteCatSign.innerText = "Delete";

  const arrowSymbol = document.createElement("p");
  arrowSymbol.className = "arrow";
  arrowSymbol.innerText = "►";

  let categoryHeaderContent = parentNode.append(
    title,
    deleteCatSign,
    arrowSymbol
  );
  return categoryHeaderContent;
}

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

  categoryTitleContent(categoryHeader);

  categoriesDiv.appendChild(newCategory);

  let deleteCatBtn = document.getElementsByClassName("delete-cat");

  categoriesDiv.childNodes.forEach((category) => {
    category.children[0].children[0].addEventListener(
      "click",
      toggleCategoryList
    );
    category.children[0].children[2].addEventListener(
      "click",
      toggleCategoryList
    );
  });

  Array.from(deleteCatBtn).forEach((button) => {
    button.addEventListener("click", deleteCategory);
  });

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

/* Delete categories */

function deleteCategory() {
  this.parentNode.parentNode.remove();
}

/* Toggle category divs to open and close */

function toggleCategoryList() {
  let listElement = this.parentNode.nextElementSibling;
  listElement.classList.toggle("active");

  let arrowElement = this.parentNode.getElementsByTagName("p")[1];
  arrowElement.classList.toggle("rotate");
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
