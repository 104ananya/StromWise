import { DateTime } from "luxon";

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

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly, list } = data;

  //   daily = daily.slice(1, 6).map((d) => {
  //     return {
  //       title: formatToLocalTime(d.dt, timezone, "ccc"),
  //       temp: d.temp.day,
  //       icon: d.weather[0].icon,
  //     };
  //   });

  //   hourly = hourly?.slice(1, 6).map((d) => {
  //     return {
  //       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
  //       temp: d.temp.day,
  //       icon: d.weather[0].icon,
  //     };
  //   });

  list = list.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly, list };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeather(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeather("forecast", {
    lat,
    lon,
    // exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrl };
