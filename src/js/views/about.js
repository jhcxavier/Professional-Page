import React from "react";
import { Link } from "react-router-dom";

export class About extends React.Component {
	render() {
		return (
			<div className="us">
				<h1> ABOUT ME </h1>
				<p1>This section is specific to any personalized information please change as you will.</p1> <br />
				<p2>This section is specific to any personalized information please change as you will.</p2>
				<div>
					<Link to={"/Home"}>
						<button>home</button>
					</Link>
				</div>
			</div>
		);
	}
}
