import React from "react";
import { Autocomplete } from "@react-google-maps/api";

function AutocompleteSearch({ locationData, setLocationData, handlePlaceSelect,setSearchBox,searchBox }) {
  return (
    <Autocomplete
      onLoad={(ref) => setSearchBox(ref)}
      onPlaceChanged={handlePlaceSelect}
    >
      <input
        className="form-input"
        placeholder="Search for a location"
        value={locationData.address}
        onChange={(e) =>
          setLocationData((prev) => ({
            ...prev,
            address: e.target.value,
          }))
        }
      />
    </Autocomplete>
  );
}

export default AutocompleteSearch;
