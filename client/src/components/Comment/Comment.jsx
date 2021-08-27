import React from 'react';
import './Comment.css';
import FormComment from '../../Form/FormComment';

const Comment = ({modelValue}) => {

	return (
		<div>

			

			<FormComment model={modelValue} />
		</div>


	)
}

export default Comment

