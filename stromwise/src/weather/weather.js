const API_KEY = "723d7812c22a56e460d2d4bc9caf3b3a";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeather = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  //   console.log(url);

  const res = await fetch(url);
  return await res.json();
  // .then((data) => data);
};

// export default getWeather;

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    visibility,
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    visibility,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeather(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
