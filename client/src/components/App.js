import React, {Component} from "react";
import "../styles/App.scss";
import Navigation from "./Navigation";
import Cover from "./Cover";
import Fenoarivobe from "./Fenoarivobe";
import Firavahana from "./Firavahana";
import Demographie from "./Demographie";
import Mines from "./Mines";
import Fokotany from "./Fokotany";
import Author from "./Author";
import Mail from "./Mail";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (
			<div className="fv-app">
				<Navigation />
				<Cover />
				<Fenoarivobe />
				<Firavahana />
				<Demographie />
				<Mines />
				<Fokotany />
				<Author />
				<Mail />
				<Footer />
			</div>
		);
	}
}

export default App;