//css file to import
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import axios from 'axios'
import apiHandler from '../../api/apiHandler.js'
import Popup from '../../base/popup';  

const {service} = apiHandler;

class editDILG extends Component {
  state = {
    postingUser: "",
    itemDescription: "",
    itemInformation: "",
    occasionOfOutfit: "",
    image: "",
    previewURL:"",
    outfitMoodComment: "",
    showPopup:false,
  };


  componentDidMount() {
      const id = this.props.match.params.id;

      axios
      .get("/api/ilookgood/"+id)
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
  
  //this is where the preview happens 
  //and our be loved DOC ref !! https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(file)
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
    
    const editDILG = new FormData();
    editDILG.append("image", this.state.image)
    editDILG.append("itemDescription", this.state.itemDescription)
    editDILG.append("itemInformation", this.state.itemInformation)
    editDILG.append("occasionOfOutfit", this.state.occasionOfOutfit)
    editDILG.append("outfitMoodComment", this.state.outfitMoodComment)
    
    const id = this.props.match.params.id;
    
    service
      .patch(`/api/ilookgood/${id}`, editDILG)
      .then((apiResponse) => {
        console.log(apiResponse);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Delete
  handleDelete = () => { 
    const id = this.props.match.params.id;

    service
    .delete(`/api/ilookgood/${id}`)
    .then((apiRes)=>{
        console.log(apiRes)
        this.setState({
            data: this.state.data.filter(
                (coolpost) => coolpost._id !== id
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

    //this part is also for the uploading preview, 
    //if a file is uploaded, will have a url representing the file's data
    //and puttin it in the src, it shows in preview !!  
    let file_preview = null;
    if(this.state.file !== "") {
      file_preview = <img className="file_preview" src={this.state.previewURL} alt="preview upload file"/>
    }

   
    
    return (
    <>
      <form onSubmit={this.handleSubmit} >
        <h2>{this.state.postingUser} Show us your OOTD!</h2>
         <label htmlFor="item">Which item you like the most?</label>
        <select
          onChange={this.handleChange}
          value={this.state.itemDescription}
          id="itemDescription"
          name="itemDescription"
        >

        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="dress">Dress</option>
        <option value="outer">Outer</option>
        <option value="shoes">Shoes</option>
        <option value="accessary">Accessary</option>
        <option value="other">Other</option>
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
              id="coolPostPic"
              name="image"
              onChange={this.handleFileOnChange}
            />
            {file_preview}
            <img src={this.state.image}/>
          </div>


          <label htmlFor="outfitMoodComment">say sth</label>
            <textarea
              id="outfitMoodComment"
              name="outfitMoodComment"
              value={this.state.outfitMoodComment}
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

export default withRouter(withUser(editDILG));