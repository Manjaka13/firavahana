import React from "react";
import "../styles/Demographie.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faUsers, faChartBar, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

function Demographie() {
	return (
		<div className="fv-demographie">
			<div className="container">
				<h2 className="ptitle title title-md">
					<Icon icon={faUsers} /> La population
				</h2>
				<div className="pseparator"></div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="card-list">
					<div className="card">
						<h3 className="title title-xsm">Nombre</h3>
						<div className="box">
							<p className="text">123 721</p>
						</div>
					</div>
					<div className="card">
						<h3 className="title title-xsm">Concentration</h3>
						<div className="box">
							<p className="text">11 hab/km2</p>
						</div>
					</div>
					<div className="card">
						<h3 className="title title-xsm">Age moyen</h3>
						<div className="box">
							<p className="text">18 ans</p>
						</div>
					</div>
				</div>
				<div className="repartition-head">
					<h3 className="title"><Icon icon={faChartBar} /> Répartition des âges</h3>
				</div>
				<div className="repartition">
					<p className="text vide"><Icon icon={faExclamationCircle} /> Pas de données.</p>
				</div>
			</div>
		</div>
	);
}

export default Demographie;