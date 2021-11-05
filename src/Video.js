import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Video() {
  return (
    <div className="container">
      <video autoPlay muted loop id="myVideo">
        <source src="../public/clouds.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
