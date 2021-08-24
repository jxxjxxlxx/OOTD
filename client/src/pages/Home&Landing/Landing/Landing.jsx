import React from 'react';
import "../Landing/Landing.css";
// import { useHistory } from "react-router-dom";




const Landing = () => {
	return (
		
		<div className="master-close">
			 <meta name="viewport" content="initial-scale=1"></meta>
			<div className="container" id="container-landing" onClick={() => {window.location.href="/home"}}>
				<div className="first" id="first-landing"> 
			<h1> DAMN I LOOK GOOD  </h1>
				</div>
				<div className="second" id="second-landing">
			<h1> PLZZ I NEED HELP!</h1>
				</div>
			
			</div>
		</div>
	)
}

export default Landing





//function Landing() {
//  const history = useHistory();
//  
//  const handleRoute = () =>{ 
//    history.push("/home");
//  }
//  
//  return (                     
//          
//  );
//}
//export default Landing;