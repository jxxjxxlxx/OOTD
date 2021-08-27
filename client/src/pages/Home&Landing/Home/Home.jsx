import "../Home/Home.css";
import React from "react";
import DILG from "./DILG.png";
import Help from "./help.png";
const Home = () => {
  return (
    <div>
      <div>
        <div className="container" id="container">
          <div
            className="first"
            id="first"
            onClick={() => {
              window.location.href = "/ilookgood";
            }}
          >
            <img className="homeimg" src={DILG} alt="ilookgood" />
          </div>
          <div
            className="second"
            id="second"
            onClick={() => {
              window.location.href = "/plzhelp";
            }}
          >
            <img className="homeimg" src={Help} alt="plzhelp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
