import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navBar">
				<Link to={"/home"}>
					<a className="nav-link" href="#">
						<Context.Consumer>
							{({ store }) => {
								return (
									<div>
										<div>{store.user[0].name}</div>
									</div>
								);
							}}
						</Context.Consumer>
					</a>
				</Link>
				<Link to={"/Projects"}>
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
