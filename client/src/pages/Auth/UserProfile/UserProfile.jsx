import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import FeedBack from "../../../base/FeedBack";
import withUser from "../withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";
import UploadWidget from '../UploadWidget';
import FormProfile from '../../../Form/FormProfile';




class UserProfile extends React.Component {

  state = {
    
    userInfo: [],
  };

  componentDidMount(){ 	
    apiHandler
      .getUser() 	
      .then((data) => {
        this.setState({
          userInfo: data,
        })
			})
	
		.catch((err)=> {
			console.log(err)
		})}
 


  render(){

  
  
  return (
    <div>
      <NavMain/>
      <h1>User profile here</h1>
      <FormProfile></FormProfile>
      {/* {this.state.userInfo.map((userDoc)=> {
        console.log(userInfo)
        return (
          
          <div key={userDoc._id}>
          <p>{userDoc.userName}</p>
          <p>{this.state.userDoc.email}</p>
          </div>
        )
      })} */}
    </div>
  );
};
};
export default UserProfile;
