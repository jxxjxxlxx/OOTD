import React from 'react';
import Comment from '../../components/Comment/Comment';
import CommentList from '../../components/Comment/CommentList';
import apiHandler from '../../api/apiHandler';
import NavMain from '../../components/NavMain/NavMain';


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
		})
		.catch((error)=>{console.log(error)})
	};
	
	render() {
		
		return (
			
		<div>
			<NavMain/>
			<h1> Outfit detail </h1>

			<div key={this.state.postingUser}>
			<h3>{this.state.postingUser.userName}</h3>
			<img src={this.state.image} alt="posted picture"/>
			<h4>This outfit is for the {this.state.occasionOfOutfit}</h4>
			<p>{this.state.problemComment}</p>
			<p>{this.state.postingTime}</p>
			</div>
			<CommentList/>
			<Comment modelValue="HelpPost"/>
		</div>
	)}

};

export default PlzHelpOutfitDetail;