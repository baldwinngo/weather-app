const key = 'bHPoIYD5TL5UbIF0x4O0Bvi46nq6bFM3';
const city = 'miami';


const getCity = async (city) => {
  
  const resourceBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const resourceQuery = `?apikey=${key}&q=${city}`;

  const response = await fetch(resourceBase + resourceQuery);
  const data = await response.json();

  return (data[0])
}


const getWeather = async (locationKey) => {

  const resourceBase = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const resourceQuery = `${locationKey}?apikey=${key}`

  const response = await fetch(resourceBase + resourceQuery);
  const data = await response.json();

  return (data[0])
}

