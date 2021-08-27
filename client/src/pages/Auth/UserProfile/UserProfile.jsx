import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import {withUser} from "../withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import '../UserProfile/UserProfile.css';
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
        	this.setState({ coolPosts: apiResponse.data });
		console.log(this.state.apiResponse.data)
      		})
		
      	.catch((error) => {
		     
        	(console.log(error));
      	});
	}
	 
	render() {
		
		return (
			<>
			<div className="nav">
				<NavMain/>
			</div>
			<div className="formProfile">
				<FormProfile/>
			</div>
			<h3> check out your posts </h3>

			{this.state.coolPosts.map((posts) =>{
				
				return(
					<div className="mainPage">

					<div key={this.state.posts}>
					
					<div className="mainContainer">
					
					<div className="mainPost">
					<ul>
						
					<li> <img src={posts.image} className="postImg" alt="pic here" ></img></li>
					</ul>

					<div className="overlay">

					<Link to={`/ilookgood/${posts._id}/edit`}>
					<img src={posts.image} alt="pic here" />
					</Link>
					</div>
					</div>
					</div>
					</div>
					</div>
				)
			})}
		
		<Footer />
		</>
		);
	}
}

export default withUser(UserProfile);
