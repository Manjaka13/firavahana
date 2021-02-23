import React from "react";
import "../styles/Fokotany.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Visualizer from "./Visualizer";
import fokotany from "../data/fokotany";

function Fokotany() {
	const build_fokotany = () => {
		return fokotany.map((item, n) => {
			return (
				<Visualizer
					className="image-data"
					image={item.image}
					legend={item.name}
				/>
			);
		});
	};
	const mapped_fokotany = build_fokotany();
	return (
		<div className="fv-mines">
			<div className="container">
				<h2 className="ptitle title title-md">
					<Icon icon={faHome} /> Les Fokotany
				</h2>
				<div className="pseparator"></div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="list">
					{mapped_fokotany}
				</div>
			</div>
		</div>
	);
}

export default Fokotany;