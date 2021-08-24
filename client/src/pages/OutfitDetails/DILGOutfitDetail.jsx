import React from 'react';
import Comment from '../../components/Comment/Comment'
import apiHandler from '../../api/apiHandler'
// import axios from 'axios'
const {service} = apiHandler

class DILGOutfitDetail extends React.Component {
	
	state = {
		postingUser:"",
		image:"",
		itemDescription:"",
		itemInformation:"",
		occasionOfOutfit:"",
		outfitMoodComment:"",
		postingTime:"",
	};

	componentDidMount () {
		const id = this.props.match.params.id;

		service 
		.get(`http://localhost:7777/api/ilookgood/${id}`)
		
		.then((apiRes)=>{
			const post = apiRes.data
			this.setState({
				...post,
			})
		})
		.catch((error)=>{console.log(error)})
	}
	
	render() {
		
		return (
			
		<div>
			<h1> Outfit detail </h1>
			<div key={this.state.postId}>
			<p>{this.state.postingUser}</p>
			<img src={this.state.image} alt="post picture"/>
			<p>{this.state.itemDescription}</p>
			<p>{this.state.itemIformation}</p>
			<p>{this.state.occasionOfOutfit}</p>
			<p>{this.state.outfitMoodComment}</p>
			<p>{this.state.postingTime}</p>
			</div>

			<Comment/>
		</div>
	)}

}

export default DILGOutfitDetail
