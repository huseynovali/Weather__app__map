import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Weatherbar.css";
import VideoComponent from "../videoComponent/Video";
import InfoContainer from "../infoContainer/infoContainer";
export default function WeatherBar() {
  const { location } = useSelector((state) => state.Location);
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        location.lat ? location.lat : 40
      }&lon=${
        location.lng ? location.lng : 46
      }&appid=5e96563f41417793fc7b6212b2ec1923&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, [location.lat]);
  return (
    info && (
      <div className="WeatherBar">
        <div style={{ position: "relative", height: "100%" }}>
          <VideoComponent video={info.weather[0].main} info={info} />
          <InfoContainer info={info} />
        </div>
      </div>
    )
  );
}
//
