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



	
}