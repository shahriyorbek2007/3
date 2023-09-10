let loaderr = document.querySelector(".loader");
let backdropp = document.querySelector(".backdrop");
let about = document.querySelector(".about");
let href = window.location.href.substring(window.location.href.indexOf("?") + 1)
function aboutReq() {
  loaderr.classList.toggle("d-n");
  backdropp.classList.toggle("d-n");
  fetch("https://countries-api-v7sn.onrender.com/countries/slug/" + href)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let border = ""
        data.borders.forEach(e => {
            border += `<a href="about.html?${e.slug}" >${e.common}</a>`;
        });
      about.innerHTML = `
            <div class="about-left">
                <img src=${data.flags.svg} alt="">
            </div>
            <div class="about-right">
                <h2>${data.name.common}</h2>
                <div class="border-s-center">
                    <div class="right-center">
                        <div class="right-center-left">
                            <p>
                                Native Name: <span>${
                                  data.name.nativeName
                                }</span>
                            </p>
                            <p>
                                Population: <span>${data.population.toLocaleString(
                                  "en-US"
                                )}</span>
                            </p>
                            <p>
                                Region: <span>${data.region}</span>
                            </p>
                            <p>
                                Sub Region: <span>${data.subregion}</span>
                            </p>
                            <p>
                                Capital: <span>${data.capital}</span>
                            </p>
                        </div>
                        <div class="right-center-right">
                            <p>
                                Top Level Domain: <span>${data.cca3}</span>
                            </p>
                            <p>
                                Currencies: <span>${data.currencies.join(
                                  ", "
                                )}</span>
                            </p>
                            <p>
                                Languages: <span>${data.languages.join(
                                  ", "
                                )}</span>
                            </p>
                        </div>
                    </div>
                    <div class="border">
                        <div class="border-left">
                            Border Countries:
                        </div>
                        <div class="border-right">
                            ${border}
                        </div>
                    </div>
                </div>
            </div>`;
      loaderr.classList.toggle("d-n");
      backdropp.classList.toggle("d-n");
    })
    .catch((err) => console.log(err));
}
aboutReq();
