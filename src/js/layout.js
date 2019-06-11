import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

<<<<<<< HEAD
import { Home } from "./views/home";
import { About } from "./views/about";
import { Contact } from "./views/contact";

=======
import injectContext from "./store/appContext";

import { Login } from "./component/login";
>>>>>>> 056f39b4175cabbb0fc3176571f9d0c917aa490a
import { Registration } from "./component/registration";
import { Home } from "./views/home";
import { Projects } from "./component/projects";
import { Contact } from "./views/contact";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Login} />
<<<<<<< HEAD
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
=======
							<Route exact path="/login" component={Login} />
							<Route exact path="/registration" component={Registration} />

>>>>>>> 056f39b4175cabbb0fc3176571f9d0c917aa490a
							<Route exact path="/home" component={Home} />
							<Route exact path="/contact" component={Contact} />

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
