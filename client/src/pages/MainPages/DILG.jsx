import React from 'react';
import NavMain from "../../components/NavMain/NavMain";
import { NavLink } from "react-router-dom";
import axios from 'axios'

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
			<h1> DILG </h1>
			<NavLink to="/ilookgood/post"> post here </NavLink>
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
