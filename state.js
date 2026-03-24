let appState = {
  currentWeather: null,
  history: [],
};

export const saveWeather = (data) => {
  appState.currentWeather = data;
};

export const getWeather = () => {
  return appState.currentWeather;
};

export const addCityToHistory = (cityName) => {
  if (appState.history.includes(cityName)) return;

  if (appState.history.length >= 5) appState.history.shift();

  appState.history = [...appState.history, cityName];
};

export const getHistory = () => {
  return appState.history;
};
