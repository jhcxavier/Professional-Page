import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/Form";

export class Intro extends React.Component {
	render() {
		return (
			//<div className="stylingIntro">
			<div className="row imageStyle container">
				<div className="col-1" />
				<div className="col-6">
					<h3>Conect with companies</h3>
					<div>
						<i className="far fa-file-alt p-3"> Create a Portfolio</i>
					</div>
					<div>
						<i className="fas fa-file-code p-3"> Update Projects</i>
					</div>
					<div>
						<i className="fas fa-project-diagram p-3"> Find your next Opportunity</i>
					</div>
				</div>
				<div className="col-1" />
				<Form className="col-4">
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						{/*<Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>*/}
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Button className="p-1 pr-4 pl-4 d-flex justify-content-center" type="submit">
						Login
					</Button>

					<Form.Group controlId="formBasicChecbox">
						<Form.Check type="checkbox" className="pt-3" label="Agreed with the Terms and Conditions" />
					</Form.Group>

					<div className="float-right">
						<Button className="p-1 pr-4 pl-4 secondary" type="submit">
							Register
						</Button>
					</div>
				</Form>
			</div>
			//	</div>
		);
	}
}

/*
			<Navbar className="bg-light justify-content-between">
				<Form inline>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
					</InputGroup>
				</Form>
				<Form inline>
					<FormControl type="text" placeholder="Search" className=" mr-sm-2" />
					<Button type="submit">Submit</Button>
				</Form>
			</Navbar>*/
