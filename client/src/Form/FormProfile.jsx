import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../pages/Auth/withUser";
import { withRouter } from "react-router-dom";
<<<<<<< HEAD

import axios from "axios";
=======
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
import "./Form.css";

const { service } = apiHandler;

const FormProfile = (props) => {
  const { context } = props;

  
  function getUserdetails () {
    service
<<<<<<< HEAD
    .getUser()
    .then(() => {
      context.setUser();
    }) 
    .catch((err)=> {
      console.log(err);
    });
=======
      .get("/api/users/me")
      .then((apiRes) => {
        const data = apiRes;
        this.setState({
          ...data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
  }

  function handleSubmit (event) {
    event.preventDefault();

    const formProfile = new FormData();
    formProfile.append("userName", this.state.userName);
    formProfile.append("password", this.state.password);

    const id = this.props.match.params.id;

    service
      .patch(`me/${id}`, formProfile,)
      .then((apiRes) => {
        console.log(apiRes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChange (event) {
    const value = event.target.value;
    const key = event.target.name;

  
  };


  return (

    <div>


<<<<<<< HEAD
      <p> {context.user && context.user.userName}</p>
      <p> {context.user && context.user.email} </p> 
      <section className="form-section">
                      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
                              <h1 className="header"> Edit profile </h1>

                        <h2> {context.user && context.user.userName} you want to update your profile? </h2>
=======
    return (
      
      <form onSubmit={this.handleSubmit}>
        <h2> {this.state.userName} you want to update your profile? </h2>
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
        <label htmlFor="username">USER NAME</label>
        <input
          onChange={handleChange}
          type="text"
          id="text"
          name="username"
<<<<<<< HEAD
          placeholder={context.user && context.user.userName}
=======
          value={this.state.userName}
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
        />
        <label htmlFor="password">PASSWORD</label>
        <input
<<<<<<< HEAD
          onChange={handleChange}
          type="currentPassword"
          id="password"
          name="password"
          placeholder="password"
=======
          onChange={this.handleChange}
          type="currentPassword"
          id="password"
          name="password"
          value={this.state.password}
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
        />
           <label htmlFor="email">EMAIL</label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder={context.user && context.user.email}
        />
<<<<<<< HEAD
        
=======
        <img src={data.profileImg} alt="pic"></img>
        {file_preview}

>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
        <button onClick={() => {window.location.href="/userprofile"}}> Submit </button>

                          
       
                    </form>

                       
                         
                    

              </section>
               
    </div>
 
)
    }

export default withUser(FormProfile);

