import React, { Component } from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import FeedBack from "../../../base/FeedBack";
import withUser from "../withUser";
import apiHandler from '../../../api/apiHandler';
import { Link } from "react-router-dom";


class UserProfile extends Component {
	state = {
		userName: "",
		httpResponse: null,
	};


	componentDidMount() {
		const promises = Promise.all([
			apiHandler.getUserInfos(),
			apiHandler.getUserItems(),
		]);

		promises.then((allPromises) => {
			const userInfos = allPromises[0];

			this.setState({
				user: userInfos,
			});
		});
	}
}

export default UserProfile;
