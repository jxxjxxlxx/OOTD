import React from 'react';
import './NavMain.css';
import { NavLink } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";




const NavMain = (props) => {
  const { context } = props;
  //Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        {/* <h3 className="logo">OOTD</h3> */}
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              
             <span> Hi, </span> <NavLink to="/userprofile">
                 {context.user && context.user.userName} 
                 
              </NavLink><span> ! </span>
             
            </li>
             <li className="home">
              <NavLink to="/userhome">HOME</NavLink>
            </li>
             {/* <li class="signout">
              <p onClick={handleLogout}>SIGN OUT</p>
        </li> */}
               
             
        <li className="signout">
              <NavLink to="/signout" onClick={handleLogout}>SIGN OUT</NavLink>
               </li> 
          </React.Fragment>
        )}


        
        {!context.isLoggedIn && (
          <React.Fragment>
            <li className="signup">
              <NavLink to="/signup">CREATE ACCOUNT</NavLink>
            </li> 
             <li className="signin">
              <NavLink to="/signin">LOG IN</NavLink>
            </li> 

         
            
      
          </React.Fragment>
         )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);

