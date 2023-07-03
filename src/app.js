function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("description");
  let precipitationElement = document.querySelector("#precipitation");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innnerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  precipitationElement.innerHTML = response.data.main.precipitation;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?q=Phoenix&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
