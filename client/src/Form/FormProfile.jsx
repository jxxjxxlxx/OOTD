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

	handleSubmit = (event) => {
		event.preventDefault();


		const fd = new FormData();

		for (const key in this.state.user) {
			if (key === "profileImg") continue;
			fd.append(key, this.status.user[key]);
		}
		
	}

	}



