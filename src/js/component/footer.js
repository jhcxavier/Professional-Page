import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Footer = () => {
	const path = window.location.pathname;
	if (path === "/" || path === "/login" || path === "/registration") {
		return (
			<footer className="stick-bottom mt-auto py-3 text-center">
				<span>© 2019 PWP ALL RIGHTS RESERVED</span>
			</footer>
		);
	} else {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<footer className="mt-auto py-5 text-center">
							<a href={store.user.linkedinURL} className="li-ic mr-5" role="button">
								<i className="fab fa-lg fa-linkedin-in" />
							</a>
							<a href={store.user.githubURL} className="git-ic mr-5" role="button">
								<i className="fab fa-lg fa-github" />
							</a>
							<Link to={"/contact"}>
								<a className="email-ic mr-5" role="button">
									<i className="far fa-lg fa-envelope" />
								</a>
							</Link>
						</footer>
					);
				}}
			</Context.Consumer>
		);
	}
};
