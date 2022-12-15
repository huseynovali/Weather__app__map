import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { addLocation } from "../store/location";
function MyComponent() {
   // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   // const bounds = new window.google.maps.LatLngBounds(center);
  //   // map.fitBounds(bounds);
  //   // setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
 const dispatch = useDispatch()

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
    dispatch(addLocation(location))
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
      onClick={(e) => {
        onClick(e.latLng.toJSON());
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
