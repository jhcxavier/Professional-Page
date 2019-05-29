import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Hernan from "../../img/hernan.png";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="backgroundDiv" />

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
