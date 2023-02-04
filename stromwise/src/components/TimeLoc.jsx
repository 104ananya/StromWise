import React from "react";
import { formatToLocalTime } from "../weather/weather";

function TimeLoc({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
            {/* Tuesday, 02 Feb 2023 | Local time: 17:05 PM */}
            {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
            {/* Berlin, DE */}
            {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeLoc;
