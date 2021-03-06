//css file to import
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withUser } from "../../pages/Auth/withUser";
import apiHandler from "../../api/apiHandler";
import "./CreateDILG.css";
import Footer from "../../components/Footer/Footer";
import NavMain from "../../components/NavMain/NavMain";

const { service } = apiHandler;

class FormDILG extends Component {
  state = {
    postingUser: "",
    itemDescription: "",
    itemInformation: "",
    occasionOfOutfit: "",
    image: "",
    previewURL: "",
    outfitMoodComment: "",
  };

  componentDidMount() {
    service
      .get("/api/users/me")
      .then((apiRes) => {
        console.log(apiRes);
        const data = apiRes.data;
        this.setState({
          ...data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //this is where the preview happens
  //and our be loved DOC ref !! https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({
        image: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const postDILG = new FormData();
    postDILG.append("image", this.state.image);
    postDILG.append("itemDescription", this.state.itemDescription);
    postDILG.append("itemInformation", this.state.itemInformation);
    postDILG.append("occasionOfOutfit", this.state.occasionOfOutfit);
    postDILG.append("outfitMoodComment", this.state.outfitMoodComment);

    service
      .post("/api/ilookgood", postDILG)
      .then((apiResponse) => {
        console.log(apiResponse);
          this.props.history.push("/ilookgood")
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
    if (this.state.file !== "") {
      file_preview = (
        <img
          className="file_preview"
          src={this.state.previewURL}
          onerror="this.style.display='none'"
        />
      );
    }

    return (
      <>

      <div className="nav">
        {" "}
          <NavMain> </NavMain>
        </div>
      <div className="DILG-box">
        <p className="guideText">share your own</p>
        <h1 className="header">OOTD</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <h2 className="DILG-header">
              {this.state.userName} Show us your OOTD!
            </h2>
            <div>
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
            </div>
            <label htmlFor="itemInformation">Where is this item from?</label>
            <input
              onChange={this.handleChange}
              value={this.state.itemInformation}
              type="text"
              id="itemInformation"
              name="itemInformation"
            />

            <div>
              <label htmlFor="occasionOfOutfit">
                What was the occasion of this outfit?
              </label>
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
            </div>
            <div>
              <label htmlFor="image">Your outfit picture</label>
              <input
                type="file"
                id="coolPostPic"
                name="image"
                onChange={this.handleFileOnChange}
              />
            </div>

            <div className="outfitCommentbox">
              <label className="outfitmoodLabel" htmlFor="outfitMoodComment">
                add some comments
              </label>
              <textarea
                id="outfitMoodComment"
                name="outfitMoodComment"
                cols="30"
                rows="5"
                value={this.state.outfitMoodComment}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button
              
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="fileImg">Your outfit pic preview {file_preview}</div>

        <Footer />
      </div>
      
       </>
    );
  }
}

export default withRouter(withUser(FormDILG));
