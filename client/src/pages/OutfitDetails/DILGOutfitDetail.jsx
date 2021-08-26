import React from "react";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/Comment/CommentList"
import apiHandler from "../../api/apiHandler";
import NavMain from '../../components/NavMain/NavMain';
import './DILGOutfitDetail.css'
const { service } = apiHandler;

class DILGOutfitDetail extends React.Component {
  state = {
    detail: [],
  };

  componentDidMount() {
    
    service
      .get(`/api/ilookgood/`)

      .then((apiRes) => {
        const detail = apiRes.data.find
        (detail => detail._id === this.props.match.params.id);
        this.setState({
          ...detail,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    
    return (
      <div>
        <div><NavMain/></div>
        <div className="pageContainer">
        <h2> Outfit Detail  </h2>
        <div className="imageContainer" key={this.state.detail}>
          <p>{this.state.user}</p>
          <div className="detailImagebox">
          <img src={this.state.image} alt="post picture" />
          <button className="wow">WoW</button>
          </div>
          <div className="infoContainer">
          <p> Item Description: {this.state.itemDescription}  </p>
          <p>Item Information {this.state.itemInformation}</p>
          <p>Occassion of Outfit: {this.state.occasionOfOutfit}</p>
          <p>Outfit Mood: {this.state.outfitMoodComment}</p>
          <p>Posting Time: {this.state.postingTime}</p>
        <div className="commentBox">
        <CommentList/>
        <Comment modelValue="CoolPost" />
        </div>
        </div>
        </div>
        </div>
       
      </div>
    )
  }
};

export default DILGOutfitDetail;
