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
							return (
								<a className="nav-link" href="#">
									{store.user[0].name}
								</a>
							);
						}}
					</Context.Consumer>
				</Link>
				<Link to={"/projects"}>
					<a className="nav-link first" href="#">
						Projects
					</a>
				</Link>
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
