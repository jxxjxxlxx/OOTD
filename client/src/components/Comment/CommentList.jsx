import React from 'react';
import apiHandler from "../../api/apiHandler";

const { service } = apiHandler;


class CommentList extends React.Component {

	state = {
		comments: [],
	};

	componentDidMount = () => {
		console.log(this.props.match.params.id)
		const id = this.props.match.params.id;


	     service
	       .get(`http://localhost:7777/api//ilookgood/${id}/comments`)
	       .then((apiRes) => {
	         console.log(data);
	         const data = apiRes.data;
	         this.setState({
	           ...data,
	         });
	       })
	       .catch((error) => {
	         console.log(error);
	       });
	   };



	//	const postComments = this.state.comments.find(c => c.postId === id)
	//		if (!postComments) postComments = []
	//	else postComments = postComments.comments
	//		this.setState({comments: postComments})
  	//	}
  	//
	//	  onCommentPost = (comment) => {
//
	//	this.setState((state) => {
	//	const found = state.comments.find(c => c.id === comment.id)
	//	if (found) return {comments: state.comments}
	//	state.comments.push(comment)
	//	return {
	//		comments: state.comments
	//	}
	//})

	render() {
		return (
			<div>
				{/*</div>///{this.state.comments.find((comment => comment.postId === id)
				//	if (!postComments) postComments = []
				//	else postComments = postComments.comments
				//	this.setState({ comments: postComments })
				//)} */}

					<h2>comment list </h2> 
				{this.state.comments.map((comment) => {
					return(
						<div key={comment._id}>
							<p> {comment.comment}</p>
						</div>
						
					)
				})}
					
				
			</div>
		)
	}



	}









export default CommentList
