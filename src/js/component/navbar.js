import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Logo from "../../img/pwp-logo.png";
import Team from "../../img/pwp-team.png";

export const Navbar = () => {
	const path = window.location.pathname;
	if (path === "/" || path === "/login" || path === "/registration") {
		return (
<<<<<<< HEAD
			<nav className="navBar">
				<Link to={"/home"}>
					<Context.Consumer>
						{({ store }) => {
							return store.userAPI[store.user].name;
						}}
					</Context.Consumer>
				</Link>
				<a className="nav-link first" href="#projects">
					Projects
				</a>
				<Link to={"/about"}>About</Link>
				<Link to={"/contact"}>Contact</Link>
=======
			<nav className="navbar">
				<img src={Logo} />
				<img src={Team} />
>>>>>>> 056f39b4175cabbb0fc3176571f9d0c917aa490a
			</nav>
		);
	} else {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<nav className="navBar">
							<Link to={"/home"}>{store.user.name}</Link>
							<a className="nav-link" href="#projects">
								Projects
							</a>
							<a
								className="nav-link"
								onClick={e => {
									store.actions.changeDisplay();
									e.target.innerHTML = store.user.display === "about" ? "Objective" : "About";
								}}>
								About
							</a>
							<Link to={"/contact"}>Contact</Link>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
};
