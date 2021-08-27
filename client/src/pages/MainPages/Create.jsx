import '../Home&Landing/Home/Home.css';
import React from 'react';
import DILG from '../Home&Landing/Home/DILG.png';
import Help from '../Home&Landing/Home/help.png';

const Create = () => {
	return (
		<div>
			<div>
			<div className="container" id="container">
				<h3 className="createClick">Click where you want to post !</h3>
				<div className="first" id="first" onClick={() => {window.location.href="/ilookgood/post"}}> 
				<img className="homeimg" src={DILG} alt="ilookgood"/>
				</div>
				<div className="second" id="second" onClick={() => {window.location.href="/plzhelp/post"}}>
				<img className="homeimg" src={Help} alt="plzhelp"/>
				</div>
			
			</div>
		</div>
		</div>
	)
}

export default Create
