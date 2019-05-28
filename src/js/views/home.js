import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
				<Context.Consumer>
					{({ store }) => {
						return store.products.map((item, index) => {
							return (
								<div key={index}>
									{item.login}+{item.organizations_url}
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
