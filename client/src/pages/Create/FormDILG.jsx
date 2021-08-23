//css file to import
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
// import apiHandler from "../../api/apiHandler";
import axios from 'axios'

class FormDILG extends Component {
  state = {
    postingUser: "",
    itemDescription: "",
    itemInformation: "",
    occasionOfOutfit: "",
    file: "",
    previewURL:"",
    outfitMoodComment: "",
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
    const postDILG = {
      postingUser: this.state.User,
      itemDescription: this.state.itemDescription,
      itemInformation: this.state.itemInformation,
      occasionOfOutfit: this.state.occasionOfOutfit,
      image: this.state.image,
      outfitMoodComment: this.state.outfitMoodComment,
    };

    axios
      .post("http://localhost:7777/api/ilookgood", postDILG)
      .then((apiResponse) => {
        console.log(apiResponse);
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
        <h2>{this.state.postingUser} Show us your OOTD!</h2>
         <label htmlFor="item">Which item you like the most?</label>
        <select
          onChange={this.handleChange}
          value={this.state.itemDescription}
          id="itemDescription"
          name="itemDescription"
        >

        <option value="Top">Top</option>
        <option value="Bottom">Bottom</option>
        <option value="Dress">Dress</option>
        <option value="Outer">Outer</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessary">Accessary</option>
        <option value="Other">Other</option>
        </select>

        <label htmlFor="itemInformation">Where is this item from?</label>
        <input
          onChange={this.handleChange}
          value={this.state.itemInformation}
          type="text"
          id="itemInformation"
          name="itemInformation"
        />

        <label htmlFor="occasionOfOutfit">What was the occasion of this outfit?</label>
        <select
          onChange={this.handleChange}
          value={this.state.occasionOfOutfit}
          id="occasionOfOutfit"
          name="occasionOfOutfit"
        >

        <option value="office">Office</option>
        <option value="school">School</option>
        <option value="sport">Sport</option>        
        <option value="date">Date</option>
        <option value="festival">Festival</option>
        <option value="travel">Travel</option>
        <option value="weekend">Weekend</option>
        <option value="specialDay">Special day</option>
        <option value="other">Other</option>
        </select>
        
        <div>
            <label htmlFor="image">Your outfit picture</label>
            <input
              type="file"
              id="picture"
              name="image"
              value={this.state.image}
              onChange={this.handleFileOnChange}
            />
            {file_preview}
          </div>

          
        
          <label htmlFor="outfitMoodComment">say sth</label>
            <input
              type="text"
              id="outfitMoodComment"
              name="outfitMoodComment"
              value={this.state.outfitMoodComment}
              onChange={this.handleChange}
            />
        <button>add more item</button>
        <button onChange={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormDILG));
