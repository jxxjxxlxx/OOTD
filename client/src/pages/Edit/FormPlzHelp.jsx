//css file to import
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import axios from 'axios'
import apiHandler from '../../api/apiHandler'
import Popup from '../../base/popup'; 

const {service} = apiHandler;

class FormPlzHelp extends Component {
  state = {
    userName: "",
    occasionOfOutfit: "",
    iamge: "",
    previewURL:"",
    problemComment: "",
    showPopup:false,
  };




  componentDidMount() {
    const id = this.props.match.params.id;

    axios
    .get("/api/plzhelp/"+id)
    .then((apiRes)=>{
        const data = apiRes.data;
        this.setState({
            ...data,
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

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

  //Update
  handleSubmit = (event) => {
    event.preventDefault();
    
    const postHelp = new FormData();
    postHelp.append("image", this.state.image)
    postHelp.append("occasionOfOutfit", this.state.occasionOfOutfit)
    postHelp.append("problemComment", this.state.problemComment)
    
    const id = this.props.match.params.id; 

    service
      .patch(`/api/plzhelp/${id}`, postHelp)
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Delete
  handleDelete = () =>{ 
    const id = this.props.match.params.id;

    service
    .delete(`/api/plzhelp/${id}`)
    .then((apiRes)=>{
        console.log(apiRes)
        this.setState({
            data: this.state.data.filter(
                (postHelp) => postHelp._id !== id
            ),
        })
    })
    .catch((error)=>{
        console.log(error)
    })
  }  
  //popup msg when update 
  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

  render() {
    console.log(this.state.image)

    let file_preview = null;
    if(this.state.file !== "") {
      file_preview = <img className="file_preview" src={this.state.previewURL} alt="preview upload file"/>
    }

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <h2>{this.state.postingUser} Ask for some advice </h2>

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
            <img src={this.state.image}/>
          </div>

          <label htmlFor="problemComment">some comments?</label>
            <textarea
              id="problemComment"
              name="problemComment"
              value={this.state.problemComment}
              onChange={this.handleChange}
            />
 <button onClick={this.togglePopup.bind(this)}>Update</button>
        {this.state.showPopup ?  
        <Popup  
          text='update done'  
          closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }  

        </form>

<button onClick={this.handleDelete}> Delete </button>
</>
    );
  }
}

export default withRouter(withUser(FormPlzHelp));