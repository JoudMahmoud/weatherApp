const apikey = "56642599461e8197a56e5ea3b53411bd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);

  if (searchBox.value.trim() === "") {
    document.querySelector(".weather").style.display = "none";
    (document.querySelector(".error").style.display = "none"), "improtant";
  } else if (response.status == 404) {
    (document.querySelector(".error").style.display = "block"), "improtant";
    document.querySelector(".weather").style.display = "none";
  } else {
    (document.querySelector(".error").style.display = "none"), "improtant";
    var data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "flex";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
