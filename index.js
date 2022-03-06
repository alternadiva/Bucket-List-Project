let categoriesDiv = document.getElementById("categories-container");

function addDefaultCategories() {
  let n = 0;
  while (n < 5) {
    let newCategory = document.createElement("div");
    newCategory.id = `category${n + 1}`;
    newCategory.className = "categories";
    newCategory.innerText = `Category ${n + 1}`;
    categoriesDiv.appendChild(newCategory);

    n++;
  }
}

window.addEventListener("load", addDefaultCategories);
