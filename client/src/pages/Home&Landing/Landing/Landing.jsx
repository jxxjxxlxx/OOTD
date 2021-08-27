<<<<<<< HEAD
import React from 'react';
// import DILG from '../Home/DILG.png';
// import Help from '../Home/help.png';
=======
import React from "react";
import DILG from "../Home/DILG.png";
import Help from "../Home/help.png";
>>>>>>> 00a5e694057e3e4db709dadc91d3ec3abd0afd2e
import "../Landing/Landing.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="enterHome">
        <Link to="/home">Click to enter</Link>
      </div>

      <div className="landingText">
        <h1>
          share your outfit on
          <br />
          OOTD
        </h1>

        <span>
          Outfit <br />
          Of <br /> The Dayumnnn
        </span>
      </div>

<<<<<<< HEAD
const Landing = () => {
	return (
		<>
		<div className="enterHome"><Link to="/home">Click to enter</Link></div>
		
<div className="landingText">
				
				<h1>share your outfit on<br/>OOTD</h1>
				
				<span>Outfit <br/>Of <br/> The Dayumnnn</span>
				</div>
			
{/* 				
				<div className="first" id="first-landing"> 
=======
      <div className="first" id="first-landing"> 
>>>>>>> 00a5e694057e3e4db709dadc91d3ec3abd0afd2e
				<img className="homeimg" src={DILG} alt="ilookgood"/>
				</div>
				<div className="second" id="second-landing">
				<img className="homeimg" src={Help} alt="plzhelp"/>
				</div>
    </>
  );
};

export default Landing;
