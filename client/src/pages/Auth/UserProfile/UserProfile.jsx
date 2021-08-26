import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
<<<<<<< HEAD
import FeedBack from "../../../base/FeedBack";
import { withUser } from "../../Auth/withUser";
=======
import withUser from "../withUser";
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";

import FormProfile from '../../../Form/FormProfile';

const { service } = apiHandler;



class UserProfile extends React.Component {
	state = {
		coolPosts: [],

	};

<<<<<<< HEAD




	compounenttDidMount () {

	service

	
      	.get("/api/me/posts")
	     
      	.then((apiResponse) => {
        	this.setState({ coolPosts: apiResponse.data });
		console.log(this.state.apiResponse.data)
      		})
		
      	.catch((error) => {
		     
        	(console.log(error));
=======
	componentDidMount () {
	
	service

	
	.get("/api/users/me/posts")
	.then((apiResponse) => {
		this.setState({ coolPosts: apiResponse.data, });
      		})
		
      	.catch((error) => {
        	console.log(error)
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
      	});
	}
	 
	render() {
		
		return (
			<div>
				<NavMain/>
				<FormProfile/>
			<p> your posts </p>

			{this.state.coolPosts.map((posts) =>{
				
				return(
					<div key={this.state.posts}>
<<<<<<< HEAD
					
					
					<ul>
						
					<li> <img src={posts.image} alt="pic here" ></img></li>
					</ul>
=======

					<Link to={`/ilookgood/${posts._id}/edit`}>
					<img src={posts.image} alt="pic here" />
					</Link>
>>>>>>> d29b43bc0791ee8aee9fb4b375576e95561c042a
					</div>
				)
			})}
		</div>
		)
	}
};
export default withUser(UserProfile);;
