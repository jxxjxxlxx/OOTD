//css file to import
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";
import UploadWidget from "../../pages/Auth/UploadWidget";


class FormDILG extends Component {
  state = {
    postingUser: "",
    itemDescription: "",
    itemInformation: "",
    occasionOfOutfit: "",
    file: null,
    outfitMoodComment: "",
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
        this.props.history.push("/ilookgood/post");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFileSelect = (temporaryURL) => {
    this.setState({tempUrl: temporaryURL})
  };

  render() {
    // if (this.props.context.user) {
    //   return <Redirect to="/ilookgood/post" />;
    // }

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

        <label htmlFor="itemInformation">Where did you get this item?</label>
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
        
        {/* <div>
            <label htmlFor="image">Your outfit picture</label>
            <input
              type="file"
              id="picture"
              name="picture"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div> */}


          <div>
          <UploadWidget
          ref={this.imageRef}
          onFileSelect={this.handleFileSelect}
          onChange={this.handleChange}
          name="image">
        <div >
            
        <img
              src={this.state.file}
              alt={this.state.userName}
            />
          </div>
            
          </UploadWidget>
        </div>
        
          <label htmlFor="outfitMoodComment">say sth</label>
            <input
              type="text"
              id="outfitMoodComment"
              name="outfitMoodComment"
              value={this.state.outfitMoodComment}
              onChange={this.handleChange}
            />
        
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormDILG));
