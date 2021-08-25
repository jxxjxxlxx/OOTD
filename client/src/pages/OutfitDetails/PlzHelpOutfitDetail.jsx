import React from 'react';
import Comment from '../../components/Comment/Comment'
import apiHandler from '../../api/apiHandler'
// import axios from 'axios'

const {service} = apiHandler

class PlzHelpOutfitDetail extends React.Component {
	
	state = {
		postingUser:"",
		image:"",
		occasionOfOutfit:"",
		problemComment:"",
		postingTime:"",
		_id: "",
	};

	componentDidMount () {
		const id = this.props.match.params.id;

		service 
		.get(`http://localhost:7777/api/plzhelp/${id}`)
		
		.then((apiRes)=>{
			const post = apiRes.data
			this.setState({
				...post,
			})
            console.log(this.state.image)
		})
		.catch((error)=>{console.log(error)})
	}
	
	render() {
		
		return (
			
		<div>
			<h1> Outfit detail </h1>

			<div key={this.state.postingUser}>
			<p>{this.state.postingUser}</p>
			<img src={this.state.image} alt="posted picture"/>
			<h4>This outfit is for the {this.state.occasionOfOutfit}</h4>
			<p>{this.state.problemComment}</p>
			<p>{this.state.postingTime}</p>
			</div>

			<Comment modelValue="HelpPost"/>
		</div>
	)}

}

export default PlzHelpOutfitDetail