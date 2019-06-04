import React from "react";
import { Login } from "./component/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Registration } from "./component/registration";
import Projects from "./component/projects";
import injectContext from "./store/appContext";

//import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/" component={Login} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/registration" component={Registration} />
							{/*<Route exact path="/contact" component={Contact} />
							//<Route exact path="/about" component={About} />*/}
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
