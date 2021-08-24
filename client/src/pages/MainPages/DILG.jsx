import React from 'react';
import NavMain from "../../components/NavMain/NavMain";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './DILG.css';

class DILG extends React.Component {

		state= {
			coolPosts: [],
		};
	
	componentDidMount() {
		axios
		.get("http://localhost:7777/api/ilookgood")
		.then((apiRes)=>{
			this.setState({
				coolPosts: apiRes.data,
			})
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
					<div key={coolPost._id}>
					<img src={coolPost.image} alt={coolPost.userName}/>
					</div>
				)
			})}
		</div>
	)
}
}


export default DILG
