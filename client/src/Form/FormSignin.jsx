import React, { Component } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { withUser } from "../pages/Auth/withUser";
import './Form.css';



class FormSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/userhome" />;
    }

    return (

      <div> 

      <div className="form-box" id="form-box">
        <div className="first sign" id="first" >
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>

        <div className="first-container">
        <h2>SIGN IN</h2>
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder="Email" className="email" />
        <p> <label htmlFor="password"></label>
        <input type="password" id="password" name="password" placeholder="Password" className="password" /></p>
        <button className="submit-signin">Submit</button>
        </div>
      </form>
        </div>

      <div className="second sign" id="second">

        <div className="second-container">
        <h2> NEED FASHION ADVICE? </h2>
        <NavLink to="signup" className="signup"> SIGN UP </NavLink>
      </div>
      </div>

      </div>
      </div>
    );
  }
}





export default withRouter(withUser(FormSignin));
