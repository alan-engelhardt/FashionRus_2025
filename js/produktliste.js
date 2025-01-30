const productContainer = document.querySelector("main");
fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json())
  .then(showProductLst);

function showProductLst(data) {
  console.log(data);
}
