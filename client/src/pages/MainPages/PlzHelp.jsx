import React from "react";
import NavMain from "../../components/NavMain/NavMain";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import apiHandler from '../../api/apiHandler';
import './DILG.css';

const { service } = apiHandler;

class PlzHelp extends React.Component {
  state = {
    helpPosts: [],
  };

  componentDidMount() {
    service
      .get("/api/plzhelp")
      .then((apiRes) => {
        this.setState({
          helpPosts: apiRes.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <NavMain></NavMain>
        <div className="mainPageHeader">
          <h1> Plzz help !! </h1>
        </div>

        <div className="postHereBtn">
          <NavLink to="/plzhelp/post" className="posthere">
            post here
          </NavLink>
        </div>

        {this.state.helpPosts.map((helpPost) => {
          return (
            <div className="mainContainer">
              <div className="mainPost" key={helpPost._id}>
                <Link to={`/plzhelp/${helpPost._id}`}>
                  <img
                    className="postImg"
                    src={helpPost.image}
                    alt={helpPost.userName}
                  />
                </Link>

                <p className="postUser">
                  {helpPost.postingUser.userName} needs help!{" "}
                </p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default PlzHelp;
