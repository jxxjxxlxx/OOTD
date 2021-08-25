import React from "react";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/Comment/CommentList"
import apiHandler from "../../api/apiHandler";
import NavMain from '../../components/NavMain/NavMain';

// import axios from 'axios'
const { service } = apiHandler;

class DILGOutfitDetail extends React.Component {
  state = {
    // postingUser: "",
    // image: "",
    // itemDescription: "",
    // itemInformation: "",
    // occasionOfOutfit: "",
    // outfitMoodComment: "",
    // postingTime: "",
    // _id: "",
    // userName: "",
    detail: [],
  };

  componentDidMount() {
    
    service
      .get(`http://localhost:7777/api/ilookgood/`)

      .then((apiRes) => {
        const detail = apiRes.data.find(detail => detail._id === this.props.match.params.id);
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
        <NavMain></NavMain>
        <h2> Outfit Detail  </h2>
        <div key={this.state.detail}>
          <p>{this.state.user}</p>
          <img src={this.state.image} alt="post picture" />
          <p> Item Description: {this.state.itemDescription}  </p>
          <p>Item Information {this.state.itemInformation}</p>
          <p>Occassion of Outfit: {this.state.occasionOfOutfit}</p>
          <p>Outfit Mood: {this.state.outfitMoodComment}</p>
          <p>Posting Time: {this.state.postingTime}</p>
        </div>
       <CommentList/>
        <Comment modelValue="CoolPost" />
      </div>
    );
  }
}

export default DILGOutfitDetail;
