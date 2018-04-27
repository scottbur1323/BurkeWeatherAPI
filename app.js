let dropDown = document.querySelector(".citySelect")
let baseWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id="
let submitText = document.querySelector("h5")
let weatherKey = "262303768614f8e18789b312097675b8"
dropDown.addEventListener("change", getCurrentWeather)

function getCurrentWeather() {
  var cityURL = dropDown.value
  var fullWeatherURL = baseWeatherURL + cityURL + weatherKey

  fetch(fullWeatherURL)
    .then(function(response){
      return response.json()
    }).then(function(data) {
      var tempC = parseInt(data.main.temp - 273)
      var tempF = parseInt(tempC * (9/5) + 32)
      submitText.innerHTML = "Temp in Celsius: " + tempC + ".  Temp in Fahrenheit: " + tempF
      var tempC = data.main.temp - 273
      var tempF = tempC * (9/5) + 32
    }).catch(function(error) {
      console.log(error)
    })
}
