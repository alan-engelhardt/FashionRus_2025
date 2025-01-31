const listContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<article class="smallProduct">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
    <h3>${product.productdisplayname}</h3>
    <p class="subtle">Tshirts | Nike</p>
    <p class="price">DKK <span>1595</span>,-</p>
    <div class="discounted">
      <p>Now DKK <span></span>,-</p>
      <p><span></span>%</p>
    </div>
    <a href="product.html">Read More</a>
  </article>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
