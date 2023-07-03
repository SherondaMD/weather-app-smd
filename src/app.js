function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Las Vegas&key=${apiKey}&units=imperial`;
let city = "city-input";

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
