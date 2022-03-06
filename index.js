let categoriesDiv = document.getElementById("categories-container");

function addDefaultCategories() {
  let n = 0;
  while (n < 5) {
    let newCategory = document.createElement("div");
    newCategory.id = `category${n + 1}`;
    newCategory.className = "categories";
    categoriesDiv.appendChild(newCategory);

    n++;
  }
}

addDefaultCategories();
