import React from "react";

import "./Button.css";
const Button = props => {
	const { label, handleCode } = props;

	return (
		<button className='button' onClick={handleCode}>
			{label}
		</button>
	);
};

export default Button;
