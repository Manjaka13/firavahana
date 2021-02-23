import React from "react";
import "../styles/Footer.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import developer from "../data/developer";

function Footer() {
	return (
		<div className="fv-footer">
			<p className="text left">
				Made with <Icon className="heart" icon={faHeart} /> by <a className="link" href={developer.link} title="Le développeur du site.">{developer.name}</a>.
			</p>
			<p className="text right">
				Copyright © 2020 - 2021
			</p>
		</div>
	)
}

export default Footer;