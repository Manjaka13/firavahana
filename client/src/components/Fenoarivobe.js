import React from "react";
import "../styles/Fenoarivobe.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import fenoarivobe from "../data/fenoarivobe";
import Visualizer from "./Visualizer";

function Fenoarivobe() {
	const build_fenoarivobe = () => {
		return fenoarivobe.images.map((item, n) => {
			return (
				<Visualizer
					key={n}
					className="image-data"
					image={item.image}
					legend={item.title}
				/>
			);
		});
	};
	const build_communes = () => {
		return fenoarivobe.table.map((item, n) => {
			return (
				<tr key={n}>
					<td>{item.commune}</td>
					<td>Fenoarivobe</td>
					<td>{item.surface}</td>
				</tr>
			);
		});
	};
	const mapped_fenoarivobe = build_fenoarivobe();
	const mapped_communes = build_communes();

	return (
		<div className="fv-fenoarivobe">
			<div className="container">
				<h2 className="ptitle title title-md">
					<Icon icon={faBookmark} /> Le district de Fenoarivobe
				</h2>
				<div className="pseparator"></div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="list">
					{mapped_fenoarivobe}
				</div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<table className="text data">
					<tr>
						<th>Commune</th>
						<th>District</th>
						<th>Surface (hA)</th>
					</tr>
					{mapped_communes}
				</table>
			</div>
		</div>
	)
}

export default Fenoarivobe;