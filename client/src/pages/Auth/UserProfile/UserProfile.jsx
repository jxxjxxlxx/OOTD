import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import FeedBack from "../../../base/FeedBack";
import { withUser } from "../../Auth/withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";

import FormProfile from '../../../Form/FormProfile';

const { service } = apiHandler;



class UserProfile extends React.Component {
	state = {
		coolPosts: [],

	};





	compounenttDidMount () {

	service

	
      	.get("/api/me/posts")
	     
      	.then((apiResponse) => {
        	this.setState({ coolPosts: apiResponse.data });
		console.log(this.state.apiResponse.data)
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
					<div key={this.state.posts}>
					
					
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
export default withUser(UserProfile);;
