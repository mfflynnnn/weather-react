import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Card() {
  return (
    <div className="card">
      <div className="row">
        <ul className="col-4 left-panel">
          <li className="city-info"></li>
          <li className="date-time"></li>
          <li className="weather-description"></li>
          <li className="granular-info">
            <span>Humidity: </span>
            <span className="humidity"></span>
            <br />
            <span>Wind: </span>
            <span className="wind"></span>
          </li>
        </ul>
        <div className="col-8 right-panel">
          <img className="main-emoji" alt="" />
          <span className="main-temp" />
          <span className="degree-symbol">°</span>
          <div className="temp-type">
            <a href="/" className="fahr">
              F
            </a>
            <span className="divider">/</span>
            <a href="/" className="cel">
              C
            </a>
          </div>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
