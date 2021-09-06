import React from "react";
import NavMain from "../../../components/NavMain/NavMain";
import { withUser } from "../withUser";
import apiHandler from "../../../api/apiHandler";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import "../UserProfile/UserProfile.css";
import FormProfile from "../../../Form/FormProfile";

const { service } = apiHandler;

class UserProfile extends React.Component {
  state = {
    coolPosts: [],
    helpPosts: [],
  };

 componentDidMount() {
 //   service

  

      //.get("/api/users/me/coolposts")
//
      //.then((apiResponse) => {
      //  this.setState({ coolPosts: apiResponse.data });
      //  console.log(this.state.apiResponse.data);
      //})
//
      //.catch((error) => {
      //  console.log(error);
      //});


 // 

Promise.all([
  fetch('/api/users/me/coolposts'),
  fetch('/api/users/me/helpposts')
])

.then(async([coolPosts, helpPosts]) => {
  const coolPost = await coolPosts.json();
  const helpPost = await helpPosts.json();
  console.log(helpPost);
})
.catch(err => {
  console.log(err);
});

 }

  render() {
    return (
      <>
        <div className="nav">
          <NavMain />
        </div>
        <div className="userContainer">
          <div className="formProfile">
            <FormProfile />
          </div>

          {this.state.coolPosts.map((posts) => {
            return (
              <div className="mainPageUser">
                <div key={this.state.posts}>
                  <div className="mainPostUser">
                    <Link to={`/ilookgood/${posts._id}/edit`}>
                      <img src={posts.image} alt="pic here" />
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

export default withUser(UserProfile);
