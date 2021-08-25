import React from 'react';
import apiHandler from "../../api/apiHandler";
import {withRouter} from "react-router-dom"

const { service } = apiHandler;


class CommentList extends React.Component {

	state = {
		comments: [],
	};

	componentDidMount  () {
		
	     service
	       .get("http://localhost:7777/api/detail/ilookgood/" + this.props.match.params.id )
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
					<h2>comment list </h2> 
				
					{this.state.comments.map((commentList)=>{
						console.log(commentList.userId.userName)
						return(
						<div key={commentList}>
							<ul>
							<li> {commentList.userId.userName} : {commentList.comment}</li>
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
