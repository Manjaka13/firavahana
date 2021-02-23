import React from "react";
import "../styles/Firavahana.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Visualizer from "./Visualizer";
import img1 from "../img/commune_firavahana/carte_commune_firavahana.jpg";
import img2 from "../img/commune_firavahana/localisation_firavahana.jpg";
import infrastructures from "../data/infrastructures";
library.add(fas);

function Firavahana() {
	let mapped_details_infrastructures = [];
	const build_infrastructures = () => {
		return infrastructures.map((item, n) => {
			if(n % 2 == 0)
				mapped_details_infrastructures.push(
					<div className="row">
						<div className="box1">
							<h3 className="title title-xsm">
								<Icon icon={item.icon} /> {item.title}
							</h3>
							<div className="separator"></div>
							<p className="text">{item.details}</p>
						</div>
						<div className="box2">
							<Visualizer
								className="image-data"
								image={item.image}
							/>
						</div>
					</div>
				);
			else
				mapped_details_infrastructures.push(
					<div className="row">
						<div className="box2">
							<Visualizer
								className="image-data"
								image={item.image}
							/>
						</div>
						<div className="box1">
							<h3 className="title title-xsm">
								<Icon icon={item.icon} /> {item.title}
							</h3>
							<div className="separator"></div>
							<p className="text">{item.details}</p>
						</div>
					</div>
				);

			return (
				<div className="card" key={n}>
					<h3 className="title title-xsm"><Icon icon={item.icon} /> {item.title}</h3>
					<p className="text">{item.content}</p>
					<Icon className="check" icon="check-circle" />
				</div>
			);
		});
	};
	const mapped_infrastructures = build_infrastructures();
	return (
		<div className="fv-firavahana">
			<div className="container">
				<h2 className="ptitle title title-md">
					<Icon icon="map-marker" /> La commune de Firavahana
				</h2>
				<div className="pseparator"></div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="box">
					<Visualizer
						className="image-data"
						image={img1}
						legend="Carte de la commune de Firavahana"
					/>
					<Visualizer
						className="image-data"
						image={img2}
						legend="Localisation de la commune de Firavahana"
					/>
				</div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="card-list">
					{mapped_infrastructures}
				</div>
				<div className="details">
					{mapped_details_infrastructures}
				</div>
			</div>
		</div>
	)
}

export default Firavahana;