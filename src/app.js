function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Phoenix&key=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
