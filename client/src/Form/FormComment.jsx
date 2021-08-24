
import './Form.css';
import React, {Component} from "react"
import { withRouter } from "react-router-dom";
import { withUser } from "../pages/Auth/withUser";
import axios from 'axios'
import apiHandler from '../api/apiHandler'

const {service} = apiHandler

class FormComment extends Component {
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
		  
		
		render() {	

		
		
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="comment">Comment Here</label>
				<textarea onChange={this.handleChange} row='3' placeholder="be nice :)" maxLength='100' name="comment"/>
				<button onChange={this.handleSubmit}>post</button>
			</form>
		</div>
	)
}

}

export default withRouter(withUser(FormComment))
