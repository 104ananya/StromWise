import "./App.css";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TimeLoc from "./components/TimeLoc";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./weather/weather";
import { useEffect, useState } from "react";

// import getWeather from './weather/weather';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
  const [query, setQuery] = useState({ q: "Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });

      // console.log(data);
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
      if (!weather) return 'from-pink-500 via-purple-500 to-indigo-500'
      
      const limit = units == 'metric' ? 20 : 60
      
      if(weather.temp <= limit) return 'bg-gradient-to-t from-sky-400 to-blue-500'

      return 'bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500'
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-1 mb-1 py-5 px-32 h-fit shadow-xl ${formatBackground()}`} >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeLoc weather={weather} />
          <Details weather={weather} />
          <Forecast title="hourly forecast" items={weather.list} />
          {/* <Forecast title="daily forecast"/> */}
        </div>
      )}
    </div>
  );
}

export default App;
