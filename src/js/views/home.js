import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Hernan from "../../img/hernan.png";
import Projects from "./projects";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="backgroundDiv" />

				<Context.Consumer>
					{({ store }) => {
						return (
							<div className="container">
								<div className="row">
									<div className="col-1" />

									<div className="col-3">
										<img
											className="main-pic"
											src={require("../../img/" + store.userAPI[store.user].imageName)}
											alt={store.userAPI[store.user].name}
										/>
									</div>
									<div className="col-2" />

									<div className="col-5 text-left">
										<h1>{store.userAPI[store.user].title}</h1>
										<p>{store.userAPI[store.user].goal}</p>
										<ul className="position-absolute">
											{store.userAPI[store.user].skills.map((item, i) => {
												return <li key="i">{item}</li>;
											})}
										</ul>
									</div>

									<div className="col-1" />
								</div>
								<div className="projectsRow row d-flex justify-content-around">
									<Projects />
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
