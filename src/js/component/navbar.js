import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Logo from "../../img/pwp-logo.png";
import Team from "../../img/pwp-team.png";

export const Navbar = () => {
	const path = window.location.pathname;
	if (path === "/login" || path === "/registration") {
		return (
			<nav className="navbar">
				<img src={Logo} />
				<img src={Team} />
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
