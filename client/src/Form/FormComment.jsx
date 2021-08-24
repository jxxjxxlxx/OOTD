
import './Form.css';
import React, {Component} from "react"
import { withRouter } from "react-router-dom";
import { withUser } from "../pages/Auth/withUser";
import apiHandler from '../api/apiHandler'

const {service} = apiHandler

class FormComment extends Component {
			state = {
			postId:"",
			onModel: "",
			comment: "",
			userId: "",
			commentingTime: "",
		}
		handleChange = (event) => {
			const value = event.target.value;
			const key = event.target.name;
		
			this.setState({ [key]: value });
		  };

		handleSubmit = (event) => {
			event.preventDefault();
			
			const postComment = new FormData();
			postComment.append("postId", this.state.postId)
			postComment.append("onModel", this.state.onModel)
			postComment.append("comment", this.state.comment)
			postComment.append("userId", this.state.userId)
			postComment.append("commentingTime", this.state.commentingTime)
			
			const id = this.props.match.params.id;

			service
			  .post(`http://localhost:7777/api/detail/ilookgood/${id}`, postComment)
			  .then((apiResponse) => {
				console.log(apiResponse);
			  })
			  .catch((error) => {
				console.log(error);
			  });
		  };
		
		handleCommentValue = (e) => {

			const id = this.props.match.params.id;

			service
			.get(`http://localhost:7777/api/detail/ilookgood/${id}`)
			.then((apiRes)=>{
				console.log(data)
				const data = apiRes.data;
				this.setState({
					...data,
				})
				
			})
			.catch((error)=>{
				console.log(error)
			})
		}
		
		render() {	

		
		
		return (
		<div>

			<form onSubmit={this.handleSubmit}>
				<label htmlFor="comment">Comment Here</label>
				<input type="text" onChange={this.handleChange} placeholder="be nice :)" name="comment"/>
				<button>post</button>
			</form>
		</div>
	)
}

}

export default withRouter(withUser(FormComment))
