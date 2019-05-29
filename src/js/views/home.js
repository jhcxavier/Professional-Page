import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Hernan from "../../img/hernan.png";
import Projects from "./projects";

export class Home extends React.Component {
	state = {
		user: 0
	};

	render() {
		return (
			<div className="text-center mt-5">
				<div className="backgroundDiv" />

				<div className="container">
					<div className="row">
						<div className="col-1" />
						<div className="col-3">
							<img className="main-pic" src={Hernan} alt="Hernan Garcia" />
						</div>
						<div className="col-2" />

						<Context.Consumer>
							{({ store }) => {
								return (
									<div className="col-4">
										<h1>{store.user[this.state.user].title}</h1>
										<p>{store.user[this.state.user].goal}</p>
										<p>{store.user[this.state.user].skills}</p>
									</div>
								);
							}}
						</Context.Consumer>

						<div className="col-2" />
					</div>
					<div className="row d-flex justify-content-around">
						<Projects />
					</div>
				</div>

				{/* <Context.Consumer>
					{({ store }) => {
						return store.products.map((item, index) => {
							return (
								<div key={index}>
									{item.login}+{item.organizations_url}
								</div>
							);
						});
					}}
				</Context.Consumer> */}
			</div>
		);
	}
}
