import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import FeedBack from "../../../base/FeedBack";
import withUser from "../withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";

import FormProfile from '../../../Form/FormProfile';

const { service } = apiHandler;


class UserProfile extends React.Component {
	state = {
		coolPosts: [],

	};

	compountDidMount () {

	service
      	.get("/api/me/posts")
      	.then((apiResponse) => {
        	this.setState({ coolPosts: apiResponse.data });

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
			{this.state.coolPosts.map((posts) =>{
				console.log(posts)
				return(
					<div key={posts}>
					
					<ul>
						
					<li> <img src={posts.image} alt="pic here" ></img></li>
					</ul>
					</div>
				)
			})}
		</div>
		)
	}
};
export default UserProfile;
