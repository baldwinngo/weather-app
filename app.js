const searchForm = document.querySelector('.search');
const searchBar = document.querySelector('#search-bar');
const cityName = document.querySelector('.city');
const cityCondition = document.querySelector('.city-condition');
const cityTemp = document.querySelector('.city-temp');

const updateWeather = (data) => {
  cityName.textContent = `${data.location.EnglishName}`
  cityCondition.textContent = `${data.weather.WeatherText}`
  cityTemp.textContent = `${data.weather.Temperature.Imperial.Value}`
}

const getWeatherData = async (city) => {

  const location = await getCity(city);
  const weather = await getWeather(location.Key);

  return {location, weather}
}

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  getWeatherData(searchBar.value.trim()).then(data => {
    updateWeather(data);
  })




  searchForm.reset();
})

