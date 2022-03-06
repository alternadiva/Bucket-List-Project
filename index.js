let categoriesDiv = document.getElementById("categories-container");

let n = 0;

window.addEventListener("load", addDefaultCategories);

function addDefaultCategories() {
  while (n < 5) {
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

    categoryHeader.innerHTML = `
    <h3 class="category-title">Category ${n + 1}</h3>
    <p class="arrow">►</p>
    `;

    categoriesDiv.appendChild(newCategory);

    categoriesDiv.childNodes.forEach((category) =>
      category.addEventListener("click", toggleCategoryList)
    );

    n++;
  }
}

function toggleCategoryList() {
  let listElement = this.childNodes[1];
  listElement.classList.toggle("active");

  let arrowElement = this.childNodes[0].getElementsByTagName("p")[0];
  arrowElement.classList.toggle("rotate");
}
