fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((categories) => {
    console.log(categories);
    const markup = categories.map((elm) => `<a href="productlist.html?category=${elm.category}">${elm.category}</a>`).join("");
    document.querySelector(".categorylist").innerHTML = markup;
  });
