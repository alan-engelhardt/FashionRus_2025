const category = new URLSearchParams(window.location.search).get("category"); //find category i url'en 
document.querySelector("h2").textContent = category; //skriv category i sidens overskrift

const listContainer = document.querySelector("#productlistContainer"); //vælg html-container til listen

// vælg alle knapper og sæt en click eventListener på hver
document.querySelectorAll("#filter button").forEach(knap => knap.addEventListener("click", filter));

document.querySelectorAll("#sorter button").forEach(knap => knap.addEventListener("click", sorter));

document.querySelector("#visflere").addEventListener("click", visflere);

let limit = 8;
let start = 0;
let endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}&limit=${limit}`; //sæt category på endpoint

function visflere(e) {
  start += limit;
  console.log(start)
  endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}&start=${start}&limit=${limit}`; //opdater atart på endpoint
  getData();
}

let allData = []; // erklær en variabel til alle produkter

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(data => {
      allData.push(...data); // tilføj nye produkter til allData
      showProducts(allData); // vis alle produkter
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "All") {
    console.log(allData);
    showProducts(allData) // vis alle produkter
  } else {
    const udsnit = allData.filter(element => element.gender == valgt); // filtrer produkter
    console.log(udsnit);
    showProducts(udsnit); // vis filtrerede produkter
  }
}

function sorter(event) {
  const dir = event.target.dataset.price;
  if (dir == "acc") {
    allData.sort((a, b) => a.price - b.price);
  } else {
    allData.sort((a, b) => b.price - a.price);
  }
  showProducts(allData);
}

function showProducts(products) {
  let markup = ""
  products.forEach(
    (product) => markup += `<a href="product.html?id=${product.id}"><article class="smallProduct ${product.soldout && "soldOut"} ${product.discount && "onSale"}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price">DKK <span>${product.price}</span>,-</p>
          <div class="discounted">
            <p>Now DKK <span>${Math.round(product.price - (product.price * product.discount) / 100)}</span>,-</p>
            <p><span>${product.discount}</span>%</p>
          </div>
        </article></a>`,
  );
  listContainer.innerHTML = markup;
}

getData();