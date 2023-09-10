let searchHtml = document.querySelector(".input input");
let cardsHtml = document.querySelector(".cards");
let loader = document.querySelector(".loader");
let backdrop = document.querySelector(".backdrop");
let selectHtml = document.querySelector("select");
function sendReq(API, load = true) {
  cardsHtml.innerHTML = "";
  load && loader.classList.toggle("d-n");
  load && backdrop.classList.toggle("d-n");
  fetch(API)
    .then((res) => res.json())
    .then((dataa) => {
      let data = dataa.data;
      console.log(data[0]);
      data.forEach((e) => {
        cardsHtml.innerHTML += `
        <a href="about.html?${e.name.slug}" class="card">
        <img src=${e.flags.svg}>
        <h2>${e.name.common}</h2>
        <p><span>Population</span>: ${e.population}</p>
        <p><span>Region</span>: ${e.region}</p>
        <p><span>Capital</span>: ${e.capital}</p>
        </a>`;
      });
      load && loader.classList.toggle("d-n");
      load && backdrop.classList.toggle("d-n");
    })
    .catch((err) => console.log(err));
}
sendReq("https://countries-api-v7sn.onrender.com/countries?limit=250");

function changeSelect() {
  selectHtml.value
    ? sendReq(
        `https://countries-api-v7sn.onrender.com/countries?region=${selectHtml.value}`
      )
    : sendReq(`https://countries-api-v7sn.onrender.com/countries?limit=250`);
}
searchHtml.addEventListener("input", (e) => {
  e.target.value
    ? sendReq(
        `https://countries-api-v7sn.onrender.com/countries?search=${e.target.value}`,
        false
      )
    : sendReq(
        `https://countries-api-v7sn.onrender.com/countries?limit=250`,
        false
      );
});
