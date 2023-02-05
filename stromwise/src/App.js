import "./App.css";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TimeLoc from "./components/TimeLoc";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./weather/weather";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

// import getWeather from './weather/weather';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
  const [query, setQuery] = useState({ q: "Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}`
        );

        setWeather(data);
      });

      // console.log(data);
    };

    fetchWeather();
  }, [query, units]);

  // if(weather.cod === 404){
  //   toast.error(`Error in fetching data`);
  // }

  const formatBackground = () => {
    if (!weather)
      return "bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500";

    const limit = units === "metric" ? 20 : 60;

    if (weather.temp <= limit)
      // return "bg-gradient-to-b from-sky-400 to-indigo-900 bg-blur ";
      return "bg-blue-700 backdrop-filter  bg-opacity-40";

    // return "bg-gradient-to-t from-orange-400 to-rose-400";
    return "bg-red-500 backdrop-filter  bg-opacity-40";
  };

  return (
    <div className="main-container">

    
    <div
      className={`mx-auto max-w-screen-md  py-5 px-32  h-fit shadow-xl  
      ${formatBackground()}`}
    >
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>

    </div>
  );
}

export default App;
