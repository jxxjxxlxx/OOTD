import './Form.css';
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../pages/Auth/withUser";
import apiHandler from "../api/apiHandler";
import UploadWidget from "../pages/Auth/UploadWidget";


class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    profileImg: "",

  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then(() => {
        this.props.history.push("/signup");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFileSelect = () => {
    this.setState({})
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/signin" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Signup</h2>
         <label htmlFor="userName">Username </label>
        <input
          onChange={this.handleChange}
          value={this.state.username}
          type="userName"
          id="userName"
          name="userName"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        
        { /* <label htmlFor="profileImg">Profile Pic</label> */}
        <label htmlFor="picture"> </label>
       
        <UploadWidget
          ref={this.imageRef}
          onFileSelect={this.handleFileSelect}
          name="profileImg"
          
          >
            Upload Profile Pic
          </UploadWidget>
      
        
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));

