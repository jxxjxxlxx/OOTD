import React from "react";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const { service } = apiHandler;

class UserProfileCool extends React.Component {
  state = {
    coolPosts: [],
  };

  componentDidMount() {
    service

      .get("/api/users/me/coolposts")
      .then((apiResponse) => {
        
        this.setState({ coolPosts: apiResponse.data });
      })

      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>

          {this.state.coolPosts.map((coolpost) => {
            return (
              <div className="mainPageUser">
                <div key={this.state.coolpost}>
                  <div className="mainPostUser">
                    <Link to={`/ilookgood/${coolpost._id}/edit`}>
                      <img src={coolpost.image} alt="pic here" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

      </>
    );
  }
}

export default withUser(UserProfileCool);
