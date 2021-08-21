import React from 'react';
import '../Home/Home.css';

const Home = () => {
	return (
		<div>
			<div>
			<div className="container" id="container">
				<div className="first" id="first" onClick={() => {window.location.href="/ilookgood"}}> 
			<h1> Damn I look goood </h1>
				</div>
				<div className="second" id="second" onClick={() => {window.location.href="/plzhelp"}}>
			<h1> Plzzz I need help !!</h1>
				</div>
			
			</div>
		</div>
		</div>
	)
}

export default Home
