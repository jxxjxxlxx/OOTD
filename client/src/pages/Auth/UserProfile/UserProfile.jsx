import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import withUser from "../withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";

import FormProfile from '../../../Form/FormProfile';

const { service } = apiHandler;


class UserProfile extends React.Component {
	state = {
		userPosts: [],

	};

	compountDidMount () {

	service

	
      	.get("/api/me/posts")
      	.then((apiResponse) => {
        	this.setState({ coolPosts: apiResponse.data, });

      		})
		
      	.catch((error) => {
        	(console.log(error));
      	});
	}

	render() {
		return (
			<div>
				<NavMain/>
				<FormProfile/>
			<p> posts </p>
			{this.state.userPosts.map((posts) =>{
				
				return(
					<div key={this.state.posts}>
					
					<img src={posts.image} alt="pic here" />
					
					</div>
				)
			})}
		</div>
		)
	}
};
export default UserProfile;
