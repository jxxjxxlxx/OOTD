import React from 'react';
import './NavMain.css';
import { NavLink } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";




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
      <NavLink exact to="/">
        {/* <h3 className="logo">OOTD</h3> */}
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              
             <span> Hi, </span> <NavLink to="/profile">
                 {context.user && context.user.userName} 
                 
              </NavLink><span> ! </span>
             
            </li>
             <li class="home">
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
        {/* {!context.isLoggedIn && (
          <React.Fragment>
            <li class="login">
              <NavLink to="/signup">CREATE ACCOUNT</NavLink>
        </li> 

         
            
           
          
          </React.Fragment>
        )}*/}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);

