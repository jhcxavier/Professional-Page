import React from "react";
import { Context } from "../store/appContext";
import Projects from "../component/projects";

export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: null,
			display: "objective"
		};
	}

	render() {
		return (
			<div className="">
				<div className="backgroundDiv" />

				<Context.Consumer>
					{({ store }) => {
						const skills = store.user.skills;
						const half = skills.length / 2;

						// Contains the information for the user title, goals and skills
						const objective = (
							<div className="col-5 text-left">
								<h1 className="mb-5">{store.user.title}</h1>
								<p className="mb-5">{store.user.goal}</p>

								<ul className="d-inline-block mr-5 ml-5">
									{skills.slice(0, half).map((item, i) => {
										return <li key={i}>{item}</li>;
									})}
								</ul>
								<ul className="d-inline-block ml-3">
									{skills.slice(half).map((item, i) => {
										return <li key={i}>{item}</li>;
									})}
								</ul>
							</div>
						);

						// Contains the about me information
						let aboutArr = store.user.about.split("<br>");
						const about = (
							<div className="col-5 text-left">
								<h2 className="mt-5">About Me</h2>
								{aboutArr.map((item, index) => {
									return <p key={index}>{item}</p>;
								})}
							</div>
						);

						// initialize the state.. if don't put condition, it creates an infinite loop
						if (!this.state.content) this.setState({ content: objective });

						if (this.state.display !== store.user.display) {
							const temp1 = store.user.display === "about" ? about : objective;
							const temp2 = store.user.display === "about" ? "about" : "objective";
							this.setState({ content: temp1, display: temp2 });
						}

						return (
							<div className="container">
								<div className="row pt-5">
									<div className="col-1" />

									<div className="col-3">
										<img className="imgshadow" src={store.user.imageURL} alt={store.user.name} />
									</div>
									<div className="col-2" />

									{this.state.content}

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
