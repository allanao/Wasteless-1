import React, { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUserLoginChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmitClick = () => {
		fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log('Repsonse form login POST:', data));
	};

	return (
		<div>
			<div className='login-input'>
				Username:
				<input value={username} onChange={handleUserLoginChange} />
			</div>
			<div classname='login-input'>
				Password:
				<input value={password} onChange={handlePasswordChange} />
			</div>
			<button id='login-button' onClick={handleSubmitClick}>
				Login
			</button>
		</div>
	);
};

export default Login;
