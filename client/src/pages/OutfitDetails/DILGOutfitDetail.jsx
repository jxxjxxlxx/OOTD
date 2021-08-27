import React from "react";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/Comment/CommentList"
import apiHandler from "../../api/apiHandler";
import NavMain from '../../components/NavMain/NavMain';
import './DILGOutfitDetail.css'
import Footer from '../../components/Footer/Footer';
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
      <>
      <div className="nav">
       <NavMain/></div>
        <div className="pageContainer">
        <div className="imageContainer" key={this.state.detail}>
          <p>{this.state.user}</p>
          <div className="detailImagebox"> Preview picture here
          <img src={this.state.image} onerror="this.style.display='none'"/>
          <button className="wow">WoW</button>
          </div>
          <div className="infoContainer">
          <p> The item I love the most of this outfit is the {this.state.itemDescription}  </p>
          <p>Item Information : {this.state.itemInformation}</p>
          <p>Occassion of Outfit: {this.state.occasionOfOutfit}</p>
          <p>Outfit mood : {this.state.outfitMoodComment}</p>
          <p>Posting Time: {this.state.postingTime}</p>
        <div className="commentBox">
        <CommentList/>
        <Comment modelValue="CoolPost" />
        </div>
        </div>
        </div>
        </div>
       
       <Footer />
     
      </>
    )
  }
};

export default DILGOutfitDetail;
