const searchForm = document.querySelector('.search');
const searchBar = document.querySelector('#search-bar');

const cityWeather = async (city) => {

  const locationKey = await getCity(city);
  const data = await getWeather(locationKey);

  return {data}
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  cityWeather(searchBar.value.trim()).then(data => {
    const temp = data.data.Temperature.Imperial.Value 
    const weather = data.data.WeatherText
  })

  console.log(temp, weather)

  searchForm.reset();
})

