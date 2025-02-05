const category = new URLSearchParams(window.location.search).get("category");
const productlist = document.querySelector(".productlist main");
const overskrift = document.querySelector("h2");

let endpoint = `https://kea-alt-del.dk/t7/api/products`;

if (category) {
  overskrift.innerHTML = category;
  endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
}

fetch(endpoint)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(data) {
  console.log(data);
  markup = data
    .map(
      (element) =>
        //`<article class="smallProduct">
        `<article class="smallProduct ${element.soldout ? "soldOut" : ""}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" />
      <h3>${element.productdisplayname}</h3>
      <p class="subtle">${element.articletype} | ${element.brandname} </p>
      <p class="price">DKK <span>${element.price}</span>,-</p>
      ${
        element.discount &&
        `<div class="discounted">
        <p>Now DKK <span></span>,-</p>
        <p><span>${element.discount}</span>%</p>
      </div>`
      }
      <a href="product.html?productId=${element.id}">Read More</a>
    </article>`
    )
    .join("");
  productlist.innerHTML = markup;
}
