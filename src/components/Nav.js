import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../imgs/logo-banana.png';

import '../App.css';

function App() {

	const navStyle = {
		color: 'white',
		textDecoration: 'none'
	};

	return (
		<nav className="">
			<Link style={navStyle} to='/'>
				<h1><img src={Logo} alt="Bannana Logo" width="150px" /></h1>
			</Link>
			<ul className="nav-links">
				<Link style={navStyle} to='/home'>
					<li className="link-item">Home</li>
				</Link>
				<Link style={navStyle} to='/videos'>
					<li className="link-item">Videos</li>
				</Link>
				<Link style={navStyle} to='/login'>
					<li className="link-item">Login</li>
				</Link>
				<Link style={navStyle} to='/register'>
					<li className="link-item">Register</li>
				</Link>
			</ul>
		</nav>
	);
}

export default App;