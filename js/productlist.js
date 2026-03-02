const klikKategori = new URLSearchParams(window.location.search).get("category");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}`;

const container = document.querySelector("main");

function getData() {
  fetch(endpoint).then(res => res.json()).then(showData);
}

function showData(json) {
  console.table(json);
  let markup = "";
  json.forEach(product => {
    markup += `
         <a href="productdetails.html?id=${product.id}">
      <article class="smallProduct onSale soldOut">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
        <h3>${product.productdisplayname}</h3>
        <p class="subtle">Tshirts | Nike</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="discounted">
          <p>Now DKK <span>974</span>,-</p>
          <p><span>${product.discount}</span>%</p>
        </div>
      </article>
    </a>
        `
  });
  container.innerHTML = markup;
}

getData();