import React from "react";
// import logo from "./logo.svg";
import logo from './funcyLogo-sm.png'
import "./scss/App.scss";

function App() {
    return (
			<div className="app-grid">
				<header>
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<h2>funcyChaos.com</h2>
					<div className="menu">
						<a href="#home">Home</a>
						<a href="#blog">Blog</a>
						<a href="#about">About</a>
					</div>
				</header>
				<main>

				</main>
				<footer>

				</footer>
			</div>
    );
}

export default App;