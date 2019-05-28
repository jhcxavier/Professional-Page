import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Single extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store }) => {
						return (
							<div>
								<h1>
									This will show the demo element: {store.demo[this.props.match.params.theid].title}
								</h1>
							</div>
						);
					}}
				</Context.Consumer>
				<Context.Consumer>
					{({ store }) => {
						return store.products.map((item, index) => {
							return (
								<div key={index} className="card">
									<div className="card-body">
										{item.login}+{item.organizations_url}
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
