import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navBar">
				<Link to={"/home"}>
					<a className="nav-link" href="#">
						João Henrique Xavier
					</a>
				</Link>
				<Link to={"/Projects"}>
					<a className="nav-link" href="#">
						Projects
					</a>
				</Link>
				<a>About</a>
				<a>Contact</a>
			</nav>
		);
	}
}
