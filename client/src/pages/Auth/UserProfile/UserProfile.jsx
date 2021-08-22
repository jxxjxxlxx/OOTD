import React from 'react';
import NavMain from "../../../components/NavMain/NavMain";
import FeedBack from "../../../base/FeedBack;
import withUser from "../withUser";
import apiHandler from '../../../api/apiHandler';
impomrt { Link } from "react-router-dom";


class UserProfile extends Component {
	state = {
		userName: "",
		httpResponse: null,
	};


	componentDidMount() {
		const promises = Pr
	}
}
const UserProfile = (props) => {
	return (
		<div>
			<NavMain></NavMain>
			<h1> User Profile </h1>
		</div>
	)
}

export default UserProfile;
