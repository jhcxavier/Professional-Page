import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
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
				<a className="nav-link" href="#">
					About
				</a>
				<a className="nav-link" href="#">
					Contact
				</a>
			</nav>
		);
	}
}
