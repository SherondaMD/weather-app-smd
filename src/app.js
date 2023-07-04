//formatting temperature and weather
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let date = document.querySelector("#date");
  date.innerHTML = showDate(response.data.time * 1000);
}

let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Las Vegas&key=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);

//formatting Time
