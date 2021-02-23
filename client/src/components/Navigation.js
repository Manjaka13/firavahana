import React from "react";
import "../styles/Navigation.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import sections from "../data/sections";

function Navigation() {
	const mapped_sections = sections.map((section, n) => {
		return (
			<li key={n}>
				<a className="text link" href={section.link} title={section.title}>
					<Icon icon={section.icon} /> {section.content}
				</a>
			</li>
		);
	});

	return (
		<div className="fv-navigation">
			<div className="left">
				<div className="logo">
					<Icon className="icon" icon="map-marker-alt" />
				</div>
				<h1 className="title title-md">Firavahana</h1>
			</div>
			<div className="right">
				<ul className="sections">
					{mapped_sections}
				</ul>
			</div>
		</div>
	)
}

export default Navigation;