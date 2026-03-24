// Import the state functions
import { saveWeather, addCityToHistory, getHistory } from "./state.js";
import { renderWeather, renderError, renderLoading, renderHistory } from "./ui.js";

// 1. DOM Elements
const formWeather = document.querySelector("#form-weather");
const inputCity = document.querySelector("#input-city");

// 2. Listen to the submit event
formWeather.addEventListener("submit", async (event) => {
  event.preventDefault(); // Stop page reload

  // Get the city value
  const city = inputCity.value.trim();

  renderLoading();

  try {
    // API URL
    const apiKey = "7fc297ddcf3d360e970f31a47fde8c02";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // 3. The Waiter goes to the Internet
    const response = await fetch(url);

    const weatherData = await response.json();

    // Log the data to see it in the console!
    console.log("Data from internet:", weatherData);

    if (weatherData.cod === 401 || weatherData.cod === "404") {
      renderError("Lo sentimos, no hemos encontrado esa ciudad.");
      return;
    }

    // 5. Save the data in the State
    saveWeather(weatherData);

    addCityToHistory(weatherData.name);

    console.log("Historial en el almacén:", getHistory());

    renderHistory()

    renderWeather();

    // Clean the input
    inputCity.value = "";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
