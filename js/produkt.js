const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector("#productContainer");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${productId}`

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(renderProduct);
}

function renderProduct(data) {
  productContainer.innerHTML = `
  <div>
    <a href="productlist.html?category=${data.category}">Tilbage</a>
    <figure>
      <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
        alt="Produktbillede"
        class="productImage"
      />
      ${data.discount ? `<span class="saleLabel">Udsalg!</span>` : ""}
    </figure>
  </div>
  <section class="productDetails">
    <h2 class="productName">${data.productdisplayname}</h2>
      <div>
        <p class="articleType"><span class="bold">Type:</span> ${data.articletype}</p>
        <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
        <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
      </div>
    <button class="buyButton">Køb nu</button>
  </section>
  `;
}

getData();