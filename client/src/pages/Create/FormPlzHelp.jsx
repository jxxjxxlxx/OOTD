//css file to import
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";

const {service} = apiHandler

class FormPlzHelp extends Component {
  state = {
    userName: "",
    occasionOfOutfit: "",
    iamge: "",
    previewURL:"",
    problemComment: "",
  };
  
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const postHelp = new FormData();
    postHelp.append("image", this.state.image)
    postHelp.append("occasionOfOutfit", this.state.occasionOfOutfit)
    postHelp.append("problemComment", this.state.problemComment)


    service 
      .post("/api/plzhelp", postHelp)
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {

    let file_preview = null;
    if(this.state.file !== "") {
      file_preview = <img className="file_preview" src={this.state.previewURL} alt="preview upload file"/>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.state.userName} Ask for some advice </h2>

        <label htmlFor="occasionOfOutfit">What would be the occasion of this outfit?</label>
        <input
          onChange={this.handleChange}
          value={this.state.occasionOfOutfit}
          type="text"
          id="occasionOfOutfit"
          name="occasionOfOutfit"
        />

        <div>
            <label htmlFor="image">Show us your outfit!</label>
            <input
              type="file"
              id="plzHelpPic"
              name="image"
              onChange={this.handleFileOnChange}
            />
            {file_preview}
          </div>

          <label htmlFor="problemComment">some comments?</label>
            <textarea
              id="problemComment"
              name="problemComment"
              value={this.state.problemComment}
              onChange={this.handleChange}
            />
        <button onClick={() => {window.location.href="/plzhelp"}}>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormPlzHelp));