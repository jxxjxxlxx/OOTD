import React from 'react'
import NavMain from "../../components/NavMain/NavMain";
import axios from 'axios'
import {Link} from 'react-router-dom'
class PlzHelp extends React.Component {
	
	state={
		helpPosts: [],
	}
	
	componentDidMount(){
		axios
		.get("http://localhost:7777/api/plzhelp")
		.then((apiRes)=>{
			this.setState({
				helpPosts: apiRes.data,
			})
		})
		.catch((error)=>{console.log(error)})
	}

	render(){
	return (
		<div>
			<NavMain>
			</NavMain>
			<h1> Plzz help !! </h1>
			{this.state.helpPosts.map((helpPost)=>{
				return(
					<div key={helpPost._id}>
						<Link to={`/plzhelp/${helpPost._id}`}>
						<img src={helpPost.image} alt={helpPost.userName}/>
						</Link>
					
					</div>
				)
			})}
		</div>
	)
}
}
export default PlzHelp
