import React from "react";
import NavMain from "../../components/NavMain/NavMain";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import apiHandler from '../../api/apiHandler';
import './DILG.css';
import Footer from "../../components/Footer/Footer";


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
      <div className="nav">
        <NavMain />
        </div>
        <div className="mainPageHeader">
          <h1 className="header"> SOS </h1>
          <p className="headerTextHelp">EMERGENCY</p>
        </div>


        <div className="mainPage">


        {this.state.helpPosts.map((helpPost) => {
          return (
            <div className="mainContainer">
              <div className="mainPost" key={helpPost.postingUser.userName}>

               <img
                    className="postImg"
                    src={helpPost.image}
                    alt={helpPost.userName}
                  />

              
                <div className="overlay">


                <Link to={`/plzhelp/${helpPost._id}`}>
                 <p className="postUser">
                  {helpPost.postingUser.userName} needs help!
                </p>
                </Link>
              </div>
                
              </div>
            </div>
          );
        })}
        </div>
	<Footer />
      </>
    );
  }
}
export default PlzHelp;
