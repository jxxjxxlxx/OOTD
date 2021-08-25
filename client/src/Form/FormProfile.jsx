import React, { Component } from "react";
import UploadWidget from "../pages/Auth/UploadWidget";
import FeedBack from "../base/FeedBack";
import apiHandler from "../api/apiHandler";
import { withUser } from "../pages/Auth/withUser";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const { service } = apiHandler;

class FormProfile extends Component {
  state = {
    userName: "",
    email: "",
    profileImg: "",
    password: "",
  };

  imageRef = React.createRef();

  componentDidMount() {
    service

      .get("/api/users/me/")
      .then((apiRes) => {
        const data = apiRes;
        this.setState({
          ...data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // apiHandler.getUser()
    // .then((apiRes) => {
    //      const data = apiRes;
    //      console.log(data)
    //      this.setState({
    //              ...data,
    //      })
    // })
    // .catch((err)=> {
    //      console.log(err)
    // })
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({
        profileImg: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formProfile = new FormData();
    formProfile.append("profileImg", this.state.profileImg);
    formProfile.append("userName", this.state.userName);
    formProfile.append("password", this.state.password);

    const id = this.props.match.params.id;

    service
      .patch(`me/${id}`, formProfile, {
        withCredentials: true,
      })
      .then((apiRes) => {
        console.log(apiRes);
      })
      .catch((err) => {
        console.log(err);
      });
  };



 

  render() {
    let file_preview = null;
    if (this.state.file !== "") {
      file_preview = (
        <img
          className="file_preview"
          src={this.state.previewURL}
          alt="prev upload"
        />
      );
    }


    return (
      <form onSubmit={this.handleSubmit}>
        <h2> {this.state.userName} you want to update your profile? </h2>
        <label htmlFor="username">USER NAME</label>
        <input
          onChange={this.handleChange}
          type="text"
          id="text"
          name="username"
          defaultValue={this.state.userName}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          onChange={this.handleChange}
          type="password"
          id="password"
          name="password"
          defaultValue={this.state.password}
        />

        <label htmlFor="profileImg">PIC</label>
        <input
          onChange={this.handleFileOnChange}
         
          type="file"
          id="profileImg"
          name="profileImg"
        />
        <img src={this.state.profileImg} alt="pic"></img>
        {file_preview}

        <button onClick={() => {window.location.href="/userprofile"}}> Submit </button>
      </form>
    );
  }

  //imageRef = React.createRef();
  //
  //componentDidMount() {
  //      apiHandler
  //              .getUserInfos()
  //              .then((data) => {
  //                      this.setState({ user: data, isLoading: false });
  //              })
  //              .catch((err)=>{
  //              this.setState({
  //              isLoading: false,
  //              httpResponse: {
  //                      status: "failure",
  //                      message: "Please try again later",
  //                              },
  //                      });
  //              });
  //}
  //
  //handleChange = (event) =>{
  //      const key = event.target.name;
  //      const value = event.target.value;
  //      this.setState({ user: {...this.state.user, [key]: value }});
  //};
  //
  //
  //isValidInput = (key) => {
  //      if (this.state.user[key] === "") {
  //              return false;
  //      } else return true;
  //      };
  //
  //
  //checkError = () => {
  //      for (const key in this.state.user) {
  //              if (this.state[key] === "") {
  //                      return true;
  //              }
  //      }
  //      return false;
  //};
  //
  //handleSubmit = (event)=> {
  //      event.preventDefault();
  //
  //      const fd = new FormData();
  //
  //      for (const key in this.state.user) {
  //              if (key === "profileImg") continue;
  //              fd.append(key, this.state.user[key]);
  //      }
  //
  //      if (this.imageRef.current.files[0]) {
  //              fd.append("profileImg", this.imageRef.current.files[0]);
  //      }
  //
  //      apiHandler
  //              .updateUser(fd)
  //              .then((data) => {
  //                      this.props.contect.setUser(data);
  //                      this.setState({
  //                              httpResponse: {
  //                                      status: "success",
  //                                      message: "Profile successfully updated",
  //
  //                              }
  //                      });
  //
  //                      this.timeoutID = setTimeout(() => {
  //                              this.setState({ httpResponse:null });
  //                      }, 2000);
  //              })
  //              .catch((err)=>{
  //                      this.setState({
  //                              httpResponse: {
  //                                      status: "failure",
  //                                      message:
  //                                      "Unsuccessful attempt to update profile, try again"
  //                              },
  //                      });
  //
  //                      this.timeoutId = setTimeout(() => {
  //                              this.setState({ httpResponse: null });
  //                      }, 2000);
  //              });
  //
  //};
  //
  //
  //handleFileSelect = (temporaryURL) => {
  //
  //      this.setState({ tmpUrl: temporaryURL });
  //};
  //
  //render() {
  //
  //      const { httpResponse } = this.state;
  //
  //
  //      if (this.state.isLoading) return <div> Loading ... </div>;
  //
  //      return (
  //              <section className="form-section">
  //                      <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
  //                              <h1 className="header"> Edit profile </h1>
  //
  //                              <div className="round-image user-image">
  //                                      <img
  //                                              src={this.state.tmpUrl || this.state.user.profileImg}
  //                                              alt={this.state.user.firstName}
  //                                      />
  //                              </div>
  //                              <div className="form-group">
  //                                      <UploadWidget
  //                                              ref={this.imageRef}
  //                                              onFileSelect={this.handleFileSelect}
  //                                              name="profileImg"
  //                                      >
  //
  //                                      Change profile image
  //                                      </UploadWidget>
  //                              </div>
  //
  //                              {httpResponse && (
  //                                      <FeedBack
  //                                              message={httpResponse.message}
  //                                              status={httpResponse.status}
  //                                      />
  //                              )}
  //
  //                              <div className="form-group">
  //                                      <label className="label" htmlFor="userName">
  //                                              Username
  //                                      </label>
  //                                      <input
  //                                              className="input"
  //                                              id="userName"
  //                                              type="text"
  //                                              name="userName"
  //                                              onChange={this.handleChange}
  //                                              value={this.state.user.userName}
  //                                              />
  //
  //                                              {!this.isValudInput("userName") && (
  //                                                      <p className="input-error"> Invalid input </p>
  //                                              )}
  //                              </div>
  //
  //                              <div className="form-group">
  //                                              <label className="label" htmlFor="email">
  //                                                              Email
  //                                              </label>
  //                                                <input
  //                                                  className="input"
  //                                                  id="email"
  //                                                  type="email"
  //                                                  name="email"
  //                                                  value={this.state.user.email}
  //                                                  disabled
  //                                                />
  //                              </div>
  //                              <Button primary disabled={this.checkError()}>
  //                                      Update
  //                              </Button>
  //                      </form>
  //
  //              </section>
  //      );
  //}
  //
}

export default withUser(FormProfile);
