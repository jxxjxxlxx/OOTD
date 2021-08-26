import './Form.css';
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../pages/Auth/withUser";
import apiHandler from "../api/apiHandler";
import UploadWidget from "../pages/Auth/UploadWidget";
import axios from 'axios';


class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    profileImg: "",

  };

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(file)
    reader.onloaded= () => {
      this.setState({
        profileImg: file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const signUp = new FormData();
    signUp.append("image", this.state.profileImg)
    signUp.append("password", this.state.password)
    signUp.append("email", this.state.email)
    signUp.append("userName", this.state.userName)



    apiHandler
      .signup(this.state)
      .then(() => {
        this.props.history.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });



  //      axios
  //    .post("http://localhost:7777/api/auth/signup", signUp)
  //    .then((apiRes) => {
  //      console.log(apiRes);
  //    })
  //    .catch((err) => {
  //      console.log(err);
  //    });
  };

  handleFileSelect = () => {
    this.setState({})
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/signin" />;
      }

    let file_preview = null;
    if(this.state.file !== "") {
      file_preview = <img className="file_preview" src={this.state.previewURL} alt="preview pic" />
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
        <div>
        <label htmlFor="profileImg"> Your pic here </label>
        <input
            type="file"
            id="profileImg"
            name="profileImg"
            onChange={this.handleFileOnChange}
            />
            {file_preview}
            </div>
       
       {/* <UploadWidget
          ref={this.imageRef}
          onFileSelect={this.handleFileSelect}
          name="profileImg"
          
          >
            Upload Profile Pic
       </UploadWidget> */}
        
        
        <button onClick={() => {window.location.href='/userhome'}}>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));
