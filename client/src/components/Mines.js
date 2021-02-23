import React from "react";
import "../styles/Mines.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faMountain} from "@fortawesome/free-solid-svg-icons";
import Visualizer from "./Visualizer";
import mines from "../data/mines";

function Mines() {
	const build_mines = () => {
		return mines.map((item, n) => {
			return (
				<Visualizer
					className="image-data"
					image={item.image}
					legend={item.title}
				/>
			);
		});
	};
	const mapped_mines = build_mines();
	return (
		<div className="fv-mines">
			<div className="container">
				<h2 className="ptitle title title-md">
					<Icon icon={faMountain} /> La géologie et les mines
				</h2>
				<div className="pseparator"></div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="list">
					{mapped_mines}
				</div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
			</div>
		</div>
	);
}

export default Mines;