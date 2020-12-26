const apikey = "3265874a2c77ae4a04bb96236a642d2f";
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

const main = document.getElementById("main");
const from = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const response = await fetch(url(city), { origin: "cors" });
  const responseData = await response.json();

  console.log(responseData);

  addWeatherToPage(responseData);
}

function addWeatherToPage(data) {
  const temp = FarengateToCels(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small>
  `;

  main.innerHTML = "";

  main.appendChild(weather);
}

function FarengateToCels(farengate) {
  return Math.floor(farengate - 273.15);
}

from.addEventListener("submit", function (event) {
  event.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});
