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
    userName: "",
    email: "",
    password: "",
    selectedItem: null,
    httpResponse: null,
    profileImage: "",
    userPosts: [],
  };

  componentDidMount(){ 	
    //apiHandler
    //  .getUser() 	
    //  .then((data) => {
    //    this.setState({
    //      userInfo: data,
    //    })
//			})
//	
//		.catch((err)=> {
//			console.log(err)
//		})}
 
    const promises = Promise.all([
	    apiHandler.getUser(),
	    apiHandler.getUserPosts(),
	    
   	 ]);

    promises.then((allPromises) => {
	    const userInfo = allPromises[0];
	    const userPosts = allPromises[1];

	    this.setState({
		    user: userInfo,
		    userPosts: userPosts,
	    	});
  	});

	}


	submitPicture = (event) => {
		event.preventDefault();
		const { httpResponse, userInfo, userPosts, profileImage, ...userData } = this.state;
	
		apiHandler
		.updateUser(userData)
		.then((data) => {
			this.props.context.setUser(data);
			this.setState({
			httpResponse: { status: "success", message: "photo added" },
		});
			this.timeoutId = setTimeout(() => {
			this.setState({ httpResponse: null });
		}, 1000);
		})
		.catch((err) => {
			this.setState({
			httpResponse: {
				status: "error",
				message: "an error occured, try later",
			},
		});
		this.timeoutId = setTimeout(() => {
			this.setState({ httpResponse: null });
		}, 1000);
	});
}; 

	handlePicture = (event) => {
		this.setState({ profileImage: event.target.file })
	};

	componentWillUnmount() {
		this.timeoutId && clearTimeout(this.timeoutId);
	}

  render(){

	const { httpResponse, userInfo, userPosts, profileImage, user } = this.state;
	if (!user) return null;


  
  
  return (
    <div>
      <NavMain/>
      <h3>User profile here</h3>
      <FormProfile></FormProfile>

      <div className="user-image round-image">
	      <img src={this.state.user.profileImg} alt={this.state.user.userName} />
	</div> 

	<div>
		{this.state.user.userPosts}
	</div>


      {/*//{this.state.userInfo.map((userDoc)=> {
      //  console.log(userInfo)
      //  return (
      //    
      //    <div key={userDoc._id}>
      //    <p>{userDoc.userName}</p>
      //    <p>{this.state.userDoc.email}</p>
      //    </div>
      //  )
      //})} */}
    </div>
  );
};
};
export default UserProfile;
