var city = document.getElementById("city");

var cardContainer = document.getElementById("cardContainer");
var current = document.getElementById("current");
var tomorrow = document.getElementById("tomorrow");
var afterTomorrow = document.getElementById("afterTomorrow");

function handledata(event) {
  if (event) event.preventDefault();
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "get",
    `https://api.weatherapi.com/v1/forecast.json?key=0b839ee944274ec68b6191516242006&q=${
      city.value || "cairo"
    }&days=3`
  );
  xhttp.send();
  xhttp.addEventListener("load", function () {
    var item = JSON.parse(xhttp.response);
    console.log(item);
    display(item);
  });
}

handledata();

function display(data) {
  console.log(data.current.date);
  current.innerHTML = ` <div class=" card h-100" >
              <div class=" d-flex justify-content-between px-3 py-1 card-head">
                <p class="text-white" >${new Date(
                  data.current.last_updated
                ).toDateString()}</p>
              </div>
              <div class="ps-2">
                <h3 class="text-white py-3">${data.location.name}</h3>
                <h4 class="text-white fw-bolder  py-3">${
                  data.current.temp_c
                }°C</h4>
                <img src="${data.current.condition.icon}" alt="" />
                <p class="ms-3 text-primary mb-4">${
                    data.current.condition.text
                }</p>
              </div>
              <div class="d-flex justify-content-start m-2">
                <div class="d-flex justify-content-center">
                <i class="text-white m-2 fa-solid fa-umbrella"></i>
                <p class="text-white m-0 p-1">${data.current.vis_km}%</p>
                  </div>
                  <div class="d-flex justify-content-center mx-3">
                  <i class="text-white m-2 fa-solid fa-wind"></i>
                  <p class="text-white m-0 p-1">${
                    data.current.wind_kph
                  } km/h</p>
                  </div>
                  <div class="d-flex justify-content-center">
                  <i class="text-white m-2 fas fa-solid fa-directions"></i>
                  <p class="text-white m-0 p-1">${data.current.wind_dir}</p>
                </div>
              </div>
           `;

  tomorrow.innerHTML = `<div class=" card h-100">
              <div class=" d-flex justify-content-center px-3 py-1 card-head">
                <p class="text-white" >${new Date(
                  data.forecast.forecastday[1].date
                ).toDateString()}</p>
              </div>
              <div class="ps-2 text-center mt-5">
                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="" />
                <h2 class="text-white  py-3">${data.forecast.forecastday[1].day.maxtemp_c}°C</h3>
                <p class="ms-3 text-primary mb-4">${data.forecast.forecastday[1].day.mintemp_c}°</p>
              </div>
              <div class="d-flex justify-content-start align-items-end h-100 mb-3">
                 <p class="ms-3 text-primary mb-4 text-center w-100">${
                    data.forecast.forecastday[1].day.condition.text
                }</p>
              </div>
            </div>`;

            afterTomorrow.innerHTML = `
            <div class=" card h-100">
              <div class=" d-flex justify-content-center px-3 py-1 card-head">
                <p class="text-white" >${new Date(
                  data.forecast.forecastday[2].date
                ).toDateString()}</p>
              </div>
              <div class="ps-2 text-center mt-5">
                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="" />
                <h2 class="text-white  py-3">${data.forecast.forecastday[2].day.maxtemp_c}°C</h3>
                <p class="ms-3 text-primary mb-4">${data.forecast.forecastday[2].day.mintemp_c}°</p>
              </div>
              <div class="d-flex justify-content-start align-items-end h-100 mb-3">
                 <p class="ms-3 text-primary mb-4 text-center w-100">${
                    data.forecast.forecastday[2].day.condition.text
                }</p>
              </div>
            </div>
            
            `
}
