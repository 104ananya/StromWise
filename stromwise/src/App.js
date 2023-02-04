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
  const [query, setQuery] = useState({ q: "Berlin" });
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

  return (
    <div className="mx-auto max-w-screen-md mt-1 mb-1 py-5 px-32 h-fit shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 ">
      <TopButtons />
      <Inputs />

      {weather && (
        <div>
          <TimeLoc weather={weather} />
          <Details weather={weather} />
          <Forecast title="hourly forecast" />
          {/* <Forecast title="daily forecast"/> */}
        </div>
      )}



    </div>
  );
}

export default App;
