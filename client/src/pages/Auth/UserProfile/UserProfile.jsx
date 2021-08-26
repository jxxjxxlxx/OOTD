import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import withUser from "../withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";

import FormProfile from '../../../Form/FormProfile';

const { service } = apiHandler;


class UserProfile extends React.Component {
	state = {
		coolPosts: [],

	};

	componentDidMount () {
	
	service

	
	.get("/api/users/me/posts")
	.then((apiResponse) => {
		this.setState({ coolPosts: apiResponse.data, });
      		})
		
      	.catch((error) => {
        	console.log(error)
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

					<Link to={`/ilookgood/${posts._id}/edit`}>
					<img src={posts.image} alt="pic here" />
					</Link>
					</div>
				)
			})}
		</div>
		)
	}
};
export default UserProfile;
