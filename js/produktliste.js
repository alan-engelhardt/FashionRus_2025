const category = new URLSearchParams(window.location.search).get("category");
document.querySelector("h2").textContent = category;
const listContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((products) => {
    const markup = products
      .map(
        (product) => `<article class="smallProduct ${product.soldout ? "soldOut" : ""}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price">DKK <span>${product.price}</span>,-</p>
          <div class="discounted">
            <p>Now DKK <span></span>,-</p>
            <p><span></span>%</p>
          </div>
          <a href="product.html?id=${product.id}">Read More</a>
        </article>`
      )
      .join("");
    listContainer.innerHTML = markup;
  });
