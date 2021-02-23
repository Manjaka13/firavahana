import React from "react";
import "../styles/Mail.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Mail() {
	return (
		<div className="fv-mail">
			<div className="container">
				<h2 className="title title-md"><Icon icon={faEnvelope} /> Nous contacter</h2>
				<p className="text">Est sunt eu nulla cupidatat consectetur sunt veniam id cillum irure et nisi laboris excepteur sunt officia do occaecat excepteur occaecat in occaecat sed eu dolore aute amet deserunt dolor duis enim occaecat magna.</p>
				<form className="form">
					<input className="text name" type="text" placeholder="Votre nom" />
					<input className="text mail" type="email" placeholder="Votre adresse mail" />
					<textarea className="text message" placeholder="Votre message"></textarea>
					<button className="text submit" type="submit">Envoyer</button>
				</form>
			</div>
		</div>
	)
}

export default Mail;