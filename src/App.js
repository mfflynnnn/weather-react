import React from "react";
import Video from "./Video.js";
import Header from "./Header.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Video />
      <div className="container">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
