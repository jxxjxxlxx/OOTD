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
  };


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

  handleRefresh = () => {
	  window.location.reload();
  }


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
          <button onClick={this.handleRefresh}>post</button>
        </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormComment));
