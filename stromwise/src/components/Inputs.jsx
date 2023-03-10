import React, { useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location")
      navigator.geolocation.getCurrentPosition((position) => {
        
        toast.success("Location fetched successfully")
        
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat: lat, lon: lon });
      });
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.target.name

    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase "
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={handleClick}
        />
        <UilMapMarker
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={handleLocation}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnits}
        >
          °C
        </button>
        <p className="text-xl text-white mx-2">/</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnits}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
