// Import the state
import { getWeather, getHistory } from "./state.js";

// DOM Element to paint the result
const weatherContainer = document.querySelector("#score-time");
const historyContainer = document.querySelector("#history-list");

// Export the function to render the weather
export const renderWeather = () => {
  // 1. Get the data from the State
  const weather = getWeather();

  // 2. If there is no data, do nothing
  if (!weather) {
    return;
  }

  const { name, main, wind, weather: weatherDetails } = weather;

  const { description, icon } = weatherDetails[0];

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const windMessage =
    wind.speed > 5 ? "🌪️ ¡Alerta de viento fuerte!" : "🍃 Brisa suave";

  // 3. Paint the HTML
  weatherContainer.innerHTML = `
    <h2>City: ${name}</h2>
    <img src="${iconUrl}" alt="Icono del clima">
    <p>Temperature: ${main.temp}°C</p>
    <p>Condition: ${description}</p>
    <p>Wind: ${wind.speed}</p>
    <p>${windMessage}</p>
    <p>Humidity: ${main.humidity}</p>
    <p>Deg: ${wind.deg}</p>
  `;
};

export const renderError = (message) => {
  weatherContainer.innerHTML = `<p style="color: red; font-weight: bold;">❌ ${message}</p>`;
};

export const renderLoading = () => {
  weatherContainer.innerHTML = `<p style="color: blue; font-weight: bold;">⏳ Buscando en el cielo...</p>`;
};

export const renderHistory = () => {
  const cities = getHistory();

  if (cities.length === 0) {
    historyContainer.innerHTML = "<p>No hay historial todavía.</p>";
    return;
  }

  const historyHTML = cities
    .map((city) => {
      return `<li>${city}</li>`;
    })
    .join("");

  historyContainer.innerHTML = historyHTML;
};
