let categoriesDiv = document.getElementById("categories-container");

function addDefaultCategories() {
  let n = 0;
  while (n < 5) {
    let newCategory = document.createElement("div");
    newCategory.id = `category${n + 1}`;
    newCategory.className = "categories";

    let categoryHeader = document.createElement("div");
    categoryHeader.className = "category-header";
    newCategory.appendChild(categoryHeader);

    categoryHeader.innerHTML = `
    <h3 class="category-title">Category ${n + 1}</h3>
    <p class="arrow">►</p>
    `;

    categoriesDiv.appendChild(newCategory);

    n++;
  }
}

window.addEventListener("load", addDefaultCategories);
