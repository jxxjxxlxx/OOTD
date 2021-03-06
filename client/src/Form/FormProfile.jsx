import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../pages/Auth/withUser";
import { withRouter } from "react-router-dom";
import "./Form.css";

const { service } = apiHandler;

const FormProfile = (props) => {
  const { context } = props;

  function getUserdetails() {
    service
      .getUser()
      .then(() => {
        context.setUser();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formProfile = new FormData();
    formProfile.append("userName", this.state.userName);
    formProfile.append("password", this.state.password);

    const id = this.props.match.params.id;

    service
      .patch(`me/${id}`, formProfile)
      .then((apiRes) => {
        this.props.history.push("/userprofile")
        console.log(apiRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(event) {
    const value = event.target.value;
    const key = event.target.name;
  }

  return (
    <div>
      <section className="form-section">
        <form
          autoComplete="off"
          className="userprofileForm"
          onSubmit={handleSubmit}
        >
          <h1 className="header"> Edit profile </h1>
          <p className="headerTextUser"> and check out your posts </p>

          <div className="form-container">
            <h4>
              Update your profile and edit your posts here,{" "}
              {context.user && context.user.userName}{" "}
            </h4>

            <div>
              <label htmlFor="username">User Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="text"
                name="username"
                placeholder={context.user && context.user.userName}
                style={{ width: "100px" }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="currentPassword"
                id="password"
                name="password"
                placeholder="password"
                style={{ width: "100px" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder={context.user && context.user.email}
                style={{ width: "100px" }}
              />
              <button
                className="profileSubmit"
                onClick={() => {
                  window.location.href = "/userprofile";
                }}
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default withUser(FormProfile);
