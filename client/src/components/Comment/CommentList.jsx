import React from 'react';
import apiHandler from "../../api/apiHandler";
import {withRouter} from "react-router-dom"
import './CommentList.css'
const { service } = apiHandler;


class CommentList extends React.Component {

	state = {
		comments: [],
	};

	componentDidMount  () {
		
	     service
	       .get("/api/detail/ilookgood/" + this.props.match.params.id )
	       .then((apiRes) => {
	        this.setState({
				comments: apiRes.data,
			})
	       })
	       .catch((error) => {
	         console.log(error);
	       });
	   };
	

	render() {

		return (
			
			<div>
				<hr className="hrLine"/>
				<h1> comment </h1> 
					{this.state.comments.map((commentList)=>{
						console.log(commentList.userId.userName)
						return(
						<div className="commentListBox" key={commentList}>
							<ul>
							<li className="comments"> <b>{commentList.userId.userName}</b> : {commentList.comment}</li>
							</ul>
						</div>
						)
					})
					}
			</div>
		)
	}
}

export default withRouter(CommentList)
