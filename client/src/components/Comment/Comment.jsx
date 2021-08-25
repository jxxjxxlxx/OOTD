import React from 'react';
import './Comment.css';
import FormComment from '../../Form/FormComment';
import CommentList from '../../components/Comment/CommentList';

const Comment = ({modelValue}) => {

	return (
		<div>

			<h1>comment </h1> 

			
			<FormComment model={modelValue} />
		</div>


	)
}

export default Comment

