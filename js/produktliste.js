const category = "Apparel";
const listContainer = document.querySelector("main");
fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(showProductLst);

function showProductLst(data) {
  const markup = data
    .map(
      (product) => `
    <article class="smallProduct">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
      <h3>${product.productdisplayname}</h3>
      <p class="subtle">Tshirts | Nike</p>
      <p class="price">DKK <span>1595</span>,-</p>
      <div class="discounted">
        <p>Now DKK <span></span>,-</p>
        <p><span></span>%</p>
      </div>
      <a href="product.html">Read More</a>
    </article>
  `
    )
    .join("");
  listContainer.innerHTML = markup;
}
