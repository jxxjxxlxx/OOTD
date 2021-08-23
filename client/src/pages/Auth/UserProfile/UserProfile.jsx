import React, { Component } from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import FeedBack from "../../../base/FeedBack";
import withUser from "../withUser";
import  apiHandler  from '../../../api/apiHandler';
import { Link } from "react-router-dom";
import UploadWidget from '../UploadWidget';
import FormProfile from '../../../Form/FormProfile';
//
//
//class UserProfile extends Component {
//	state = {
//		user: null,
//		httpResponse: null,
//		email: "",
//		tmpUrl: "",
//		isLoading: true,
//	};
//
//	imageRef = React.createRef();
//
//	componentDidMount() {
//		apiHandler
//			.getUserInfos()
//			.then((data) => {
//				this.setState({ user: data, isLoading: false });
//			})
//			.catch((err) => {
//				this.setState({
//					isLoading: false,
//					httpResponse: {
//						status: "failure",
//						message: "an error occured, try again later",
//
//					},
//				});
//			});
//	}
//	
//
//	handleChange = (event) => {
//		const key = event.target.name;
//		const value = event.target.value;
//		this.setState({ user: { ...this.state.user, [key]: value } });
//	};
//
//	isValidInput = (key) => {
//		if (this.state.user[key] === "") {
//			return false;
//		} else return true;
//	};
//
//	checkError = () => {
//		for (const key in this.state.user) {
//			if (this.state[key] === "") {
//				return true;
//			}
//		}
//		return false;
//	};
//
//	handleSubmit = (event) => {
//		
//		event.preventDefault();
//
//		const fd = new FormData();
//
//		for (const key in this.state.user) {
//			
//			if (key === "profileImg") continue;
//			fd.append(key, this.state.user[key]);
//			
//		}
//		
//		
//		if (this.imageRef.current.files[0]) {
//			fd.append("profileImg", this.imageRef.Ref.current.files[0]);
//		}
//
//		apiHandler
//			.updateUser(fd)
//			.then((data) => {
//				this.props.context.setUser(data);
//				this.setState({
//					httpResponse: {
//						status: "success",
//						message: "profile updated successfully!",
//					},
//				});
//
//				this.timeoutId = setTimeout(() => {
//					this.setState({ httpResponse: null });
//				}, 2000);
//			})
//			.catch((err) => {
//				this.setState({
//					httpResponse: {
//						status: "fail",
//						message: "error while updating, try again later",
//					},
//				});
//
//				this.timeoutId = setTimeout(() => {
//					this.setState({ httpResponse: null });
//				}, 2000);
//			});
//	};
//
//	handleFileSelect = (temporaryURL) => {
//		    // Get the temporaryURL from the UploadWidget component and
//    // set the state so we can have a visual feedback on what the image will look like :)
//		this.setState({ tmpUrl: temporaryURL });
//	};
//
//	render() {
//		const { httpResponse } = this.state;
//
//		if (this.state.isLoading) return <div> Loading... </div>;
//
//
//		return (
//			<section className="form-section">
//				<form autoComplete="on" className="form" onSubmit={this.handleSubmit}>
//					<h1 className="header"> Edit Profile </h1>
//
//				<div className="round-image user-image">
//					<img 
//						src={this.state.tmpUrl || this.state.user.profileImg}
//						alt={this.state.user.userName}
//					/>
//				</div>
//
//				<div className="form-group">
//					<UploadWidget
//						ref={this.imageRef}
//						onFileSelect={this.handleFileSelect}
//						name="profileImg"
//					>Change pic </UploadWidget> 
//				</div>
//
//				{httpResponse && (
//					<FeedBack 
//						message={httpResponse.message}
//						status={httpResponse.status}
//						/>
//
//				)}
//
//				<div className="user-image image">
//				<img 
//					src={this.state.tmpURL || this.state.user.profileImg}
//					alt={this.state.user.userName} 
//				/>
//
//			</div>
//
//			<div className="user-userName">
//				<h2 className="username"> Username </h2>
//				<input
//					className="input"
//					id="userName"
//					type="text"
//					name="userName"
//					onChange={this.handleChange}
//					value={this.state.user.userName}
//					/>
//			</div>
//
//			<button>Submit </button> 
//			</form>
//			</section>
//
//		);
//	}
//
//}
//
//export default UserProfile;
//



const UserProfile = (props) => {
  return (
    <div>
      <h1>User profile here</h1>
      <FormProfile></FormProfile>
    </div>
  );
};

export default UserProfile;
