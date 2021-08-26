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
      <div className="nav">
        <NavMain />
      </div>
        <div className="mainPageHeader">
          <h1 className="header"> OOTD </h1>
          {/* <p className="headerP"> Outfit Of The Dayummn</p> */}
        </div>
        
            

          <div className="mainPage">

          {this.state.coolPosts.map((coolPost) => {
            return (
              <div className="mainContainer">

                <div className="mainPost" key={coolPost._id}>
                  
                    <img
                      className="postImg"
                      src={coolPost.image}
                      alt={coolPost.postingUser.userName}
                    />
                  
                <div className="overlay">
                  <Link to={`/ilookgood/${coolPost._id}`}>
                  <p className="postUser">{coolPost.postingUser.userName}</p>
                  </Link>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default DILG;
