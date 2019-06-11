import React from "react";
import { Link } from "react-router-dom";

export class Contact extends React.Component {
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
<<<<<<< HEAD
					//style="height:200px"
=======
>>>>>>> 056f39b4175cabbb0fc3176571f9d0c917aa490a
				/>

				<input type="submit" value="Done? Click Me" />
				<input type="submit" value="Submit" />
				<Link to={"/Home"}>
					<button>home</button>
				</Link>
			</div>
		);
	}
}
