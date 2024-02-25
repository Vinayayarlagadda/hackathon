// Filename - App.js

import React from "react";
import "./homepage.css";
//import { Link } from 'react-router-dom';
import hunger from './hunger.png';
import hunger2 from './hunger3.png';

//import Register from "./webregister.js";

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src={hunger2}  alt="noo"  />
					</div>
					<li>
						<a href="#">Details</a>
					</li>
					<li>
						<a href="#tutorials">Support</a>
					</li>
					<li>
						<a href="#jobs">Login</a>
					</li>
					<li>
						<a href="#student">SignUp</a>
					</li>
				</ul>

				<div className="search">
					<button class="btn btn-sm">
						Search
					</button>
				</div>
			</nav>
            <div className="image">
		    <img src={hunger} alt="noo" height="600" width="600"/>
            </div>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	);
}

export default App;
