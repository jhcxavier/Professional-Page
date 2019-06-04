import React from "react";

class Projects extends React.Component {}

export default Projects;

export class Home extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="fname">First Name</label>
				<input type="text" id="fname" name="firstname" placeholder="Your name.." />

				<label htmlFor="lname">Last Name</label>
				<input type="text" id="lname" name="lastname" placeholder="Your last name.." />

				<label htmlFor="email">Email</label>
				<select id="Email" name="Email" />

				<label htmlFor="message">Looking Forward to your message!</label>
				<textarea
					id="message"
					name="message"
					placeholder="Please leave your full contact information and detailed message"
					style="height:200px"
				/>

				<input type="submit" value="Done? Click Me" />
				<input type="submit" value="Submit" />
			</div>
		);
	}
}
