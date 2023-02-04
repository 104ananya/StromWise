import React from "react";
import { iconUrl } from "../weather/weather";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>

      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img
              // src="http://openweathermap.org/img/wn/01d@2x.png"
              src={iconUrl(item.icon)}
              alt="h-pic"
              className="w-12 my-1"
            />
            <p className="font-medium">{`${item.temp.toFixed()}`}°</p>
            {/* <p className="font-light">Clear</p> */}
          </div>
        ))}







        {/* <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="h-pic"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="h-pic"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="h-pic"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="h-pic"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div> */}
      </div>
    </div>
  );
}

export default Forecast;
