import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap/Form";

export class Registration extends React.Component {
<<<<<<< HEAD
	render() {}
=======
	render() {
		return <p>This is where the registration form goes.</p>;
	}
>>>>>>> 056f39b4175cabbb0fc3176571f9d0c917aa490a
}
return (
    <div/>
	<form>
		<div className="input-group">
			<div className="input-group-prepend">
				<span className="input-group-text">First and Last name</span>
			</div>
			<input type="text" aria-label="First name" className="form-control" />
			<input type="text" aria-label="Last name" className="form-control" />
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Email address</label>
			<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

			<div className="form-group">
				<label htmlFor="exampleFormControlSelect2">Please leave meassage below:</label>
			</div>
			<div>
				<button type="button" className="btn btn-primary btn-sm">
					Submit
				</button>
			</div>
		</div>
	</form>
 <div/>
)

