import "./NavMain.css";
import { NavLink } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";
import React, { Component } from "react";

const NavMain = (props) => {
  const { context } = props;
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
      
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <div className="navbar">
           

                <div className="dropdown">
                  <button class="dropbtn">
                    <span> Hi, </span>
                    {context.user && context.user.userName}
                  </button>
                  <div class="dropdown-content">
                        <li className="profilepage">
                          <NavLink to="/userprofile">Profile</NavLink>
                        </li>
                        <li className="userHome">
                          <NavLink to="/userhome">Create post</NavLink>
                        </li>
                        <li className="link-dilg">
                        <NavLink to="/ilookgood">DILG</NavLink>
                        </li>
                        <li className="link-plzhelp">
                        <NavLink to="/plzhelp">Plz help!</NavLink>
                        </li>
                       
                        
                  
                </div>
              </div>
            <li className="signout">
                        <NavLink to="/signin" onClick={handleLogout}> Sign out   </NavLink>   
                        </li>

            </div>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (

          
          <React.Fragment>
            <div className="navbar">
  
            <li className="signup-nav notLoggedIn">
              <NavLink to="/signup">Create Account</NavLink>
            </li>
            <li className="signin notLoggedIn">
              <NavLink to="/signin">Log In</NavLink>
            </li>

            </div>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};
export default withUser(NavMain);
