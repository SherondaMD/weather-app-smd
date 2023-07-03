function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("description");
  let precipitationElement = document.querySelector("#precipitation");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innnerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  precipitationElement.innerHTML = response.data.temperature.precipitation;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let city = "Phoenix";

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Phoenix&key=b8b61a4d34f03tcbf3192f94o59a0ba4&units=imperial";

axios.get(`${apiUrl}`).then(displayTemperature);
