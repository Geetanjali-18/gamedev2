import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          UNLOCK YOUR <br />
          GAMING POTENTIAL
        </div>
        <div className="hero-content2">
          Our mission is to craft unforgettable gaming experiences that push the
          boundaries of imagination and technology{" "}
        </div>
        <div>
          <Link to = "/login"><button className="btn">JOIN US DEVLOPER</button></Link>
          <button className="btn">JOIN US GAMER</button>
        </div>
      </div>
    </>
  );
};

export default Banner;