import React from "react";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/Comment/CommentList";
import apiHandler from "../../api/apiHandler";
import NavMain from "../../components/NavMain/NavMain";
import "./DILGOutfitDetail.css";
import Footer from "../../components/Footer/Footer";

const { service } = apiHandler;

class PlzHelpOutfitDetail extends React.Component {
  state = {
    postingUser: "",
    image: "",
    occasionOfOutfit: "",
    problemComment: "",
    postingTime: "",
    _id: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    service
      .get(`/api/plzhelp/${id}`)

      .then((apiRes) => {
        const post = apiRes.data;
        this.setState({
          ...post,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="nav">
          <NavMain />
        </div>

        <div className="pageContainer">
          <div className="imageContainer" key={this.state.detail}>
            <div className="detailImagebox">
              <img src={this.state.image} alt="posted picture" />
              <button className="wow">WoW</button>
            </div>

            <div className="infoContainer">
              <h4 className="occasionHelp">
                This outfit is for the {this.state.occasionOfOutfit}
              </h4>
              <p>
                <b>{this.state.postingUser.userName}'s fashion problem : </b>
                {this.state.problemComment}
              </p>
              <p>{this.state.postingTime}</p>
              <div className="commentBox">
                <CommentList />
                <Comment modelValue="HelpPost" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default PlzHelpOutfitDetail;
