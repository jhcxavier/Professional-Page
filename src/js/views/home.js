import React from "react";
import { Context } from "../store/appContext";
import Projects from "../component/projects";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-2">
				<div className="backgroundDiv">
					<img src="https://blog.pusher.com/wp-content/uploads/2018/06/vscode-jsdev-wallaby.gif" />
				</div>

				<Context.Consumer>
					{({ store }) => {
						return (
							store.userAPI && (
								<div className="container">
									<div className="row">
										<div className="col-1" />

										<div className="col-3">
											<img
												className="main-pic mt-5 pt-4"
												src={require("../../img/" + store.userAPI[store.user].imageName)}
												alt={store.userAPI[store.user].name}
											/>
										</div>
										<div className="col-2" />

										<div className="col-5 text-left">
											<h1 className="mb-5">{store.userAPI[store.user].title}</h1>
											<p className="mb-5">{store.userAPI[store.user].goal}</p>

											<ul className="d-inline-block mr-5 ml-5">
												{store.userAPI[store.user].skills.map((item, i) => {
													return <li key={i}>{item}</li>;
												})}
											</ul>
											<ul className="d-inline-block ml-3">
												{store.userAPI[store.user].skills.map((item, i) => {
													return <li key={i}>{item}</li>;
												})}
											</ul>
										</div>

										<div className="col-1" />
									</div>
									<div className="projectsRow row d-flex justify-content-around">
										<Projects />
									</div>
								</div>
							)
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
