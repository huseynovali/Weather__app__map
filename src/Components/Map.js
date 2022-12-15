import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { addLocation } from "../store/location";
function MyComponent() {
  const dispatch = useDispatch();
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 40.399115172256465,
    lng: 49.86790313641712,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBBdFkdxHu3p5eHCTUzfhnoqqmlsXLsRmY",
  });
  const onClick = (location) => {
    console.log(location.lat);
    dispatch(addLocation(location));
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onClick={(e) => {
        onClick(e.latLng.toJSON());
      }}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
