import React from 'react';
import NavMain from "../../components/NavMain/NavMain";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from 'axios';
import './DILG.css';
import apiHandler from '../../api/apiHandler';

const { service } = apiHandler;

class DILG extends React.Component {

		state= {
			coolPosts: [],
		};
	
	componentDidMount() {
		service
		.get("api/ilookgood")
		.then((apiRes)=>{
			this.setState({
				coolPosts: apiRes.data,
			})
			console.log(apiRes)
		})
		.catch((error)=>{console.log(error)})
	}	
	render() {
	return (
		<div>
			<NavMain></NavMain>
			<div className="DILG">
			
			<h1> DILG </h1>
			</div>
			
			<div>
			<NavLink to="/ilookgood/post" className="posthere"> post here </NavLink>
			</div>
			{this.state.coolPosts.map((coolPost)=>{
				return(

					<div className="grid-container">
					<div className="coolpost-grid">
					<div key={coolPost._id}>
						<Link to={`/ilookgood/${coolPost._id}`}>
							<img src={coolPost.image} alt={coolPost.postingUser.userName}/>
						</Link>
					
					<p>{coolPost.postingUser.userName}</p>
					</div>
					</div>
					</div>
				)
			})}
		</div>
	)
}
}


export default DILG
