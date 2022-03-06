let categoriesDiv = document.getElementById("categories-container");

window.addEventListener("load", addDefaultCategories);

let n = 0;

function addCategories() {
  let newCategory = document.createElement("div");
  newCategory.id = `category${n + 1}`;
  newCategory.className = "categories";

  let categoryHeader = document.createElement("div");
  categoryHeader.className = "category-header";
  newCategory.appendChild(categoryHeader);

  let listDiv = document.createElement("div");
  listDiv.className = "list-div";
  listDiv.id = `list${n + 1}`;
  newCategory.appendChild(listDiv);

  categoryTitle("category", categoryHeader);

  categoriesDiv.appendChild(newCategory);

  categoriesDiv.childNodes.forEach((category) =>
    category.addEventListener("click", toggleCategoryList)
  );
}

function addDefaultCategories() {
  while (n < 5) {
    addCategories();
    n++;
  }
}

function toggleCategoryList() {
  let listElement = this.childNodes[1];
  listElement.classList.toggle("active");

  let arrowElement = this.childNodes[0].getElementsByTagName("p")[0];
  arrowElement.classList.toggle("rotate");
}

function categoryTitle(input, parentNode) {
  const title = document.createElement("h3");
  title.className = "category-title";
  title.innerText = input;

  const arrowSymbol = document.createElement("p");
  arrowSymbol.className = "arrow";
  arrowSymbol.innerText = "►";

  let categoryHeaderContent = parentNode.append(title, arrowSymbol);
  return categoryHeaderContent;
}

const addCategoryBtn = document.getElementById("add-category-btn");
addCategoryBtn.addEventListener("click", nameCategory);
