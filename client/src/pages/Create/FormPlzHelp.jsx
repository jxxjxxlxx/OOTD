//css file to import
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";


class FormPlzHelp extends Component {
  state = {
    userName: "",
    occasionOfOutfit: "",
    file: "",
    previewURL:"",
    problemComment: "",
  };
  
  //this is where the preview happens 
  //and our be loved DOC ref !! https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
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

    apiHandler
      .post(this.state)
      .then(() => {
        this.props.history.push("/plzhelp/post");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {

    //this part is also for the uploading preview, 
    //if a file is uploaded, will have a url representing the file's data
    //and puttin it in the src, it shows in preview !!  
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
              id="picture"
              name="picture"
              value={this.state.image}
              onChange={this.handleFileOnChange}
            />
            {file_preview}
          </div>

          
        
          <label htmlFor="problemComment">some comments?</label>
            <input
              type="text"
              id="problemComment"
              name="problemComment"
              value={this.state.problemComment}
              onChange={this.handleChange}
            />
        <button onChange={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormPlzHelp));