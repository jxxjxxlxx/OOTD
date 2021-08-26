import React from "react";
import NavMain from "../../components/NavMain/NavMain";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DILG.css";
import apiHandler from "../../api/apiHandler";

const { service } = apiHandler;

class DILG extends React.Component {
  state = {
    coolPosts: [],
  };

  componentDidMount() {
    service
      .get("api/ilookgood")
      .then((apiRes) => {
        this.setState({
          coolPosts: apiRes.data,
        });
        console.log(apiRes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <NavMain/>
        <div className="mainPageHeader">
          <h1> DILG </h1>
        </div>

		<div className="postHereBtn">
          <NavLink to="/ilookgood/post" className="posthere">
            post here
          </NavLink>
        </div>

        {this.state.coolPosts.map((coolPost) => {
          return (
            <div className="mainContainer">
              <div className="mainPost" key={coolPost._id}>
                <Link to={`/ilookgood/${coolPost._id}`}>
                  <img
                    className="postImg"
                    src={coolPost.image}
                    alt={coolPost.postingUser.userName}
                  />
                </Link>

                <p className="postUser">{coolPost.postingUser.userName}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default DILG;
