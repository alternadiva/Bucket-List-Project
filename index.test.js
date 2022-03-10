/* Set TimeOut to allow page to load */

setTimeout(function () {
  test("Submit button event handler returns a new category html element object with two child nodes", () => {
    const categoriesDiv = document.getElementsByClassName("categories");
    const submitBtn = document.getElementById("submit-category");

    submitBtn.click();
    let newCat = categoriesDiv[categoriesDiv.length - 1];

    let actual1 = typeof newCat;
    let expected1 = "object";
    equal(actual1, expected1);

    let actual2 = newCat.childNodes.length;
    let expected2 = 2;
    equal(actual2, expected2);
    categoriesDiv[categoriesDiv.length - 1].remove();
  });

  test("Submit button event handler adds a new category and set input value as category name", () => {
    const categoriesDiv = document.getElementsByClassName("categories");
    const input = document.getElementById("name-category-input");
    input.value = "TEST";
    const submitBtn = document.getElementById("submit-category");

    submitBtn.click();
    let newCatName =
      document.getElementsByClassName("category-title")[
        categoriesDiv.length - 1
      ];

    let actual1 = newCatName.innerHTML;
    let expected1 = "TEST";
    equal(actual1, expected1);
    input.value = "";
    categoriesDiv[categoriesDiv.length - 1].remove();
  });

  test("Delete button event handler removes category parent node", () => {
    const categoriesDiv = document.getElementsByClassName("categories");
    let newTestCat = addCategories();
    newTestCat.id = "test-id";
    const deleteBtn =
      document.getElementsByClassName("delete-cat")[categoriesDiv.length - 1];
    deleteBtn.id = "test-btn";

    deleteBtn.click();

    let actual1 = document.getElementById("test-id");
    let expected1 = null;
    equal(actual1, expected1);
  });

  test("Click on category title sets active class name to open and close list container", () => {
    const categoryTitle = document.getElementsByClassName("category-title")[2];
    const listDiv = document.getElementsByClassName("list-div")[2];

    categoryTitle.click();

    let actual1 = listDiv.classList.contains("active");
    let expected1 = true;
    equal(actual1, expected1);
    categoryTitle.click();
  });
}, 2000);
