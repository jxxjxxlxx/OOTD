
import FormSignin from '../../../Form/FormSignin';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const SignOut = () => {
	return (
		<div>
			<React.Fragment>
			
             <li className="signin">
              <NavLink to="/signin">Sign in</NavLink>
            </li>

			</React.Fragment>


			<React.Fragment>
		<li className="signup">
		<NavLink to ="/signup">Sign up</NavLink> 
		</li>

			</React.Fragment>
		</div>
	)
}

export default SignOut
