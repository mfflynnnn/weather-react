import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <div className="header">
      <h1>It's a Breeze</h1>
      <h2>Your Super Easy Weather App</h2>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search for a city..."
          aria-label="Search"
        />
      </form>
    </div>
  );
}
