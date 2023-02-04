import React from "react";

import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilEye,
  UilTemperaturePlus,
  UilTemperatureQuarter,
  UilDashboard,
} from "@iconscout/react-unicons";

import { formatToLocalTime, iconUrl } from "../weather/weather";

function Details({
  weather: {
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    visibility,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-200">
        <p>
          {/* Clear */}
          {details}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          // src="http://openweathermap.org/img/wn/01d@2x.png"
          src={iconUrl(icon)}
          alt="weather"
          className="w-20"
        />
        <p className="text-5xl">
          {/* 34°  */}
          {`${temp.toFixed()}`}°
        </p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels like :
            <span className="font-medium ml-2">
              {/* 32° */}
              {`${feels_like.toFixed()}`}°
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-2">
              {/* 65% */}
              {`${humidity.toFixed()}`}%
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-2">
              {/* 11 km/h */}
              {`${speed.toFixed()}`} km/h
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilEye size={18} className="mr-1" />
            Visiblity:
            <span className="font-medium ml-2">
              {/* 3 km */}
              {`${visibility.toFixed() / 1000}`} km
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilDashboard size={18} className="mr-1" />
            Pressure:
            <span className="font-medium ml-2">
              {/* 3 km */}
              {`${pressure.toFixed()}`}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {/* 06:50 AM */}
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {/* 07:50 PM */}
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilTemperaturePlus />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {/* 45° */}
            {`${temp_max.toFixed()}`}°
          </span>
        </p>
        <p className="font-light">|</p>

        <UilTemperatureQuarter />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {/* 23° */}
            {`${temp_min.toFixed()}`}°
          </span>
        </p>
      </div>
    </div>
  );
}

export default Details;
