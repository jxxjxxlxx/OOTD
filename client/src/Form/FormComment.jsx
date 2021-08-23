import React from 'react';
import './Form.css';
import React, {Component} from "react"
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import axios from 'axios'

class FormComment extends Component {
	render() {	
		state = {
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
			postComment.append("comment", this.state.comment)
			postComment.append("userId", this.state.userId)
			postComment.append("commentingTime", this.state.commentingTime)
		
			axios
			  .post("http://localhost:7777/api/ilookgood/:id", postComment, { withCredentials: true })
			  .then((apiResponse) => {
				console.log(apiResponse);
			  })
			  .catch((error) => {
				console.log(error);
			  });
		  };
		
		
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="comment">Comment</label>
				<textarea onChange={this.handleChange} row='3' placeholder="be nice :)" maxLength='100' name="comment"/>
				<button>post</button>
			</form>
		</div>
	)
}

}

export default withRouter(withUser(FormComment))
