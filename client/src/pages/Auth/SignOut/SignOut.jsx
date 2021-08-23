
import FormSignin from '../../../Form/FormSignin';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const SignOut = () => {
	return (
		<div>
			<React.Fragment>
			
             <li class="signin">
              <NavLink to="/signin">Sign in</NavLink>
            </li>

			</React.Fragment>
		</div>
	)
}

export default SignOut
