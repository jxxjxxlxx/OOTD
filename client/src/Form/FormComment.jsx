import "./Form.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../pages/Auth/withUser";
import apiHandler from "../api/apiHandler";

const { service } = apiHandler;

class FormComment extends Component {
  state = {
    postId: this.props.match.params.id,
    onModel: this.props.model,
    comment: "",
	// comments: [],
  };

//   componentDidMount = () => {
// 	const id = this.props.match.params.id;
// 	const postComments = this.state.comments.find(c => c.postId === id)
// 	if (!postComments) postComments = []
// 	else postComments = postComments.comments
// 	this.setState({comments: postComments})
//   }

//   onCommentPost = (comment) => {
// 	this.setState((state) => {
// 		const found = state.comments.find(c => c.id === comment.id)
// 		if (found) return {comments: state.comments}
// 		state.comments.push(comment)
// 		return {
// 			comments: state.comments
// 		}
// 	})
// }


  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const postComment = {
		postId: this.state.postId,
		onModel: this.state.onModel,
		comment: this.state.comment
	}

    const id = this.props.match.params.id;

    service
      .post(`/api/detail/ilookgood/${id}`, postComment)
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };


//   handleCommentValue = (e) => {
//     const id = this.props.match.params.id;

//     service
//       .get(`http://localhost:7777/api//ilookgood/${id}/comments`)
//       .then((apiRes) => {
//         console.log(data);
//         const data = apiRes.data;
//         this.setState({
//           ...data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };


  render() {
    return (
	
      <div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Comment Here</label>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="be nice :)"
            name="comment"
          />
          <button>post</button>
        </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormComment));
