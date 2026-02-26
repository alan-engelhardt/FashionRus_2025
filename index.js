const container = document.querySelector(".categorylist");

function getData() {
  fetch(`https://kea-alt-del.dk/t7/api/categories`)
    .then((response) => response.json())
    .then(showData);
}

function showData(data) {
  let markup = "";
  data.forEach((element) => markup += `<a href="productlist.html?category=${element.category}">${element.category}</a>`);
  container.innerHTML = markup;
}

getData();