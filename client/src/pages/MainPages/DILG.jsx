import React from 'react';
import NavMain from "../../components/NavMain/NavMain";
import { NavLink } from "react-router-dom";


const DILG = () => {
	return (
		<div>
			<NavMain></NavMain>
			<h1> DILG </h1>
			<NavLink to="/ilookgood/post"> post here </NavLink>
		</div>
	)
}

export default DILG
