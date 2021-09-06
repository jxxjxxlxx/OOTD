import React from "react";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const { service } = apiHandler;

class UserProfileHelp extends React.Component {
  state = {
    helpPosts: [],
  };

  componentDidMount() {
    service

      .get("/api/users/me/helpPosts")
      .then((apiResponse) => {
        
        this.setState({ helpPosts: apiResponse.data });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
          {this.state.helpPosts.map((helppost)=>{
            return(
              <div className="mainPageUser">
                <div key={this.state.helppost}>
                  <div className="mainPostUser">
                    <Link to={`/plzhelp/${helppost._id}/edit`}>
                      <img src={helppost.image} alt="pic here" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

      </>
    );
  }
}

export default withUser(UserProfileHelp);
