import React from 'react'
import NavMain from "../../components/NavMain/NavMain";
import axios from 'axios'

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
					<img src={helpPost.image} alt={helpPost.userName}/>
					</div>
				)
			})}
		</div>
	)
}
}
export default PlzHelp
