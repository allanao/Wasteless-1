import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import CurrentList from './CurrentList';
import PurchasedList from './PurchasedList';
import EatenList from './EatenList';
import LikedList from './LikedList';
import DisposedList from './DisposedList';
import SignUpForm from './SignUpForm';
import Login from './Login';

function App() {
	const [signup, setSignup] = useState(true);
	const [login, setLogin] = useState(false);
	const [main, setMain] = useState(false);

	const handleSignupClick = (e) => {
		setSignup(false);
		setLogin(true);
		setMain(false);
	};

	const handleLoginClick = (e) => {
		setSignup(false);
		setLogin(false);
		setMain(true);
	};

	let render = (
		<div className='App'>
			<SideNavBar />
			

			<Switch>
				{/* <Route component={SignUpForm} exact path='/' />
				<Route component={Login} exact path='/login' /> */}
				<Route component={CurrentList} exact path='/' />
				<Route component={PurchasedList} exact path='/purchased' />
				<Route component={EatenList} exact path='/eaten' />
				<Route component={LikedList} exact path='/liked' />
				<Route component={DisposedList} exact path='/disposed' />
			</Switch>
		</div>
	);

	if (signup) render = <SignUpForm onClick={handleSignupClick} />;
	if (login) render = <Login onClick={handleLoginClick}/>;

	return render;
}

export default App;
