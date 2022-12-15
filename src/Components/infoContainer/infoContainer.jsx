import React from "react";
import { BsCircle, BsWind } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureHigh } from "react-icons/fa";
import "./infoContainer.css";
export default function InfoContainer({ info }) {
  return (
    <div className="info">
      <h1 className="location__name">{info.name}</h1>
      <div className="temprature">
        <div className="degre">
          <p>{info.main.temp}</p>
          <BsCircle className="circle__icon" />
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
        />
      </div>
      <p className="weather__info__text">{info.weather[0].main}</p>

      <div className="weather__info__icon">
        <div className="humid">
          <IoWaterOutline />
          <p>{info.main.humidity}%</p>
        </div>
        <div className="hr"></div>
        <div className="temp">
          <FaTemperatureHigh />
          <div className="temp__min__max">
            <span>{info.main.temp_min}</span>
            <span>{info.main.temp_max}</span>
          </div>
        </div>
        <div className="hr"></div>
        <div className="wind__speed">
          <BsWind />
          <p>{info.wind.speed}</p>
        </div>
      </div>
    </div>
  );
}
