import React from "react";
import NavMain from "../../../components/NavMain/NavMain";
import { withUser } from "../withUser";
import Footer from "../../../components/Footer/Footer";
import FormProfile from "../../../Form/FormProfile";
import UserProfileCool from "../../../components/UserProfilePosts/UserProfileCool"
import UserProfileHelp from "../../../components/UserProfilePosts/UserProfileHelp.jsx"

const UserProfile = () => {
  return (
      <>
        <div className="nav">
          <NavMain />
        </div>
        <div className="userContainer">
          <div className="formProfile">
            <FormProfile />
          </div>
        <UserProfileCool/>
        <UserProfileHelp/>
        </div>
        <Footer />
      </>
    )
  }

    

export default withUser(UserProfile);
