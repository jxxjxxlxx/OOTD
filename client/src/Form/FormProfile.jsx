import React, { Component } from "react";
import UploadWidget from "../pages/Auth/UploadWidget";
import FeedBack from "../base/FeedBack";
import apiHandler from "../api/apiHandler";
import withUser from "../pages/Auth/withUser";

class FormProfile extends Component {
	state = {
		user: null,
		tmpUrl: "",
		httpResponse: null,
		isLoading: true,
	};


	imageRef = React.createRef();

	componentDidMount() {
		apiHandler
			.getUserInfos()
			.then((data) => {
				this.setState({ user: data, isLoading: false });
			})
			.catch((err)=>{
			this.setState({
			isLoading: false,
			httpResponse: {
				status: "failure",
				message: "Please try again later",
					},
				});
			});
	}

	handleChange = (event) =>{
		const key = event.target.name;
		const value = event.target.value;
		this.setState({ user: {...this.state.user, [key]: value }});
	};


	isValidInput = (key) => {
		if (this.state.user[key] === "") {
			return false;
		} else return true;
		};


	checkError = () => {
		for (const key in this.state.user) {
			if (this.state[key] === "") {
				return true;
			}
		}
		return false;
	};

	handleSubmit = (event)=> {
		event.preventDefault();

		const fd = new FormData();

		for (const key in this.state.user) {
			if (key === "profileImg") continue;
			fd.append(key, this.state.user[key]);
		}

		if (this.imageRef.current.files[0]) {
			fd.append("profileImg", this.imageRef.current.files[0]);
		}

		apiHandler
			.updateUser(fd)
			.then((data) => {
				this.props.contect.setUser(data);
				this.setState({
					httpResponse: {
						status: "success",
						message: "Profile successfully updated",

					}
				});

				this.timeoutID = setTimeout(() => {
					this.setState({ httpResponse:null });
				}, 2000);
			})
			.catch((err)=>{
				this.setState({
					httpResponse: {
						status: "failure",
						message:
						"Unsuccessful attempt to update profile, try again"
					},
				});

				this.timeoutId = setTimeout(() => {
					this.setState({ httpResponse: null });
				}, 2000);
			});

	};


	handleFileSelect = (temporaryURL) => {

		this.setState({ tmpUrl: temporaryURL });
	};

	render() {

		const { httpResponse } = this.state;


		if (this.state.isLoading) return <div> Loading ... </div>;

		return (
			<section className="form-section">
				<form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
					<h1 className="header"> Edit profile </h1>

					<div className="round-image user-image">
						<img 
							src={this.state.tmpUrl || this.state.user.profileImg}
							alt={this.state.user.firstName}
						/>
					</div>
					<div className="form-group">
						<UploadWidget
							ref={this.imageRef}
							onFileSelect={this.handleFileSelect}
							name="profileImg"
						>

						Change profile image
						</UploadWidget>
					</div>

					{httpResponse && (
						<FeedBack
							message={httpResponse.message}
							status={httpResponse.status}
						/>
					)}

					<div className="form-group">
						<label className="label" htmlFor="userName">
							Username
						</label>
						<input
							className="input"
							id="userName"
							type="text"
							name="userName"
							onChange={this.handleChange}
							value={this.state.user.userName}
							/>

							{!this.isValudInput("userName") && (
								<p className="input-error"> Invalid input </p>
							)}
					</div>

					<div className="form-group">
            						<label className="label" htmlFor="email">
              							Email
            						</label>
                                                        <input
                                                          className="input"
                                                          id="email"
                                                          type="email"
                                                          name="email"
                                                          value={this.state.user.email}
                                                          disabled
                                                        />
					</div>
					<Button primary disabled={this.checkError()}>
						Update
					</Button>
				</form>

			</section>
		);
	}



	}

	export default withUser(FormProfile);



