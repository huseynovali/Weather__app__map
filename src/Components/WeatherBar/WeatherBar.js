import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Weatherbar.css";
import { rain, snow, clear, clouds } from "../../assets/videos";
import VideoComponent from "../videoComponent/Video";
import InfoContainer from "../infoContainer/infoContainer";
export default function WeatherBar() {
  const { location } = useSelector((state) => state.Location);
  const [info, setInfo] = useState();
  const [video, setVideo] = useState();
  const checkVideo = (paramsValue) => {
    if (paramsValue.weather[0].main === "Clouds") {
      setVideo(clouds);
    } else if (paramsValue.weather[0].main === "Rain") {
      setVideo(rain);
    } else if (paramsValue.weather[0].main === "Clear") {
      setVideo(clear);
    } else {
      setVideo(snow);
    }
  };

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
        
        checkVideo(data);
      });
  }, [location.lat, video]);
  return (
    info && (
      <div className="WeatherBar">
        {console.log(video)}
        <div style={{ position: "relative", height: "100%" }}>
          {video && <VideoComponent video={video} info={info} />}
          <InfoContainer info={info} />
        </div>
      </div>
    )
  );
}
//
