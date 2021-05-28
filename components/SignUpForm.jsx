import React, { useState } from 'react';

const SignUpForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUserChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmitClick = () => {
		fetch('/api/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log('Response from POST: ', data))
			.catch((err) => console.log('Error from POST request: ', err));

			props.onClick();

	};

	return (
		<div id='signup-container'>
			<div className='signup-input'>
				Username:
				<input className="signup-text" value={username} onChange={handleUserChange} />
			</div>
			<div className='signup-input'>
				Password:
				<input className="signup-text" value={password} type="password" onChange={handlePasswordChange} />
			</div>
			<button id='signup-button' onClick={handleSubmitClick}>
				Sign Up
			</button>
		</div>
	);
};

export default SignUpForm;